import exp from 'express'
import { authenticate } from '../services/authService.js';
import { UserTypeModel } from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import { verifyToken } from '../middlewares/verifyToken.js';
export const commonRouter=exp.Router()

//login
commonRouter.post("/login", async (req, res) => {
  //get user cred object
  let userCred = req.body;
  //call authenticate service
  let { token, user } = await authenticate(userCred);
  //save tokan as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "login success", payload: user });
});
//logout for User, Author and Admin
commonRouter.get('/logout', (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie('token', {
    httpOnly: true, // Must match original  settings
    secure: false,   // Must match original  settings
    sameSite: 'lax' // Must match original  settings
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
});



//change password
commonRouter.put('/change-password', verifyToken, async (req, res) => {
  // 1. Get current password and new password
  const { email, currentPassword, newPassword } = req.body;

  try {
    // 2. Find the user in the database
    const user = await UserTypeModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3. Check if the current password is correct or not
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    // 4. Hash the new password before saving
    const salt = await bcrypt.genSalt(12);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // 5. Replace current password with new password
    user.password = hashedNewPassword;
    await user.save();

    // 6. Send response
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating password", error: error.message });
  }
});



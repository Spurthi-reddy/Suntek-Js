
import exp from "express";
import { hash } from "bcryptjs";
import { UserModel } from "../model/UserModel.js";
import { ProductModel } from "../model/ProductModel.js";
export const userRoute = exp.Router();

//Create User
userRoute.post("/users", async (req, res) => {
  //get user from req
  let newUser = req.body;
    //run validator
  await new UserModel(newUser).validate();

  //hash password
  let hashedPassword = await hash(newUser.password, 10);
  //replace plain password with hashed password
  newUser.password = hashedPassword;
  //create new user documen
  let newUserDocument = new UserModel(newUser);
  //save
  await newUserDocument.save({validateBeforeSave:false});
  //res
  res.status(201).json({ message: "User created" });
});

//Add product to user's cart
userRoute.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  //read uid and pid from url parameters
  let { uid, pid } = req.params; //{ uid:"" , pid:""}
  //check user
  let user = await UserModel.findById(uid);
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
    // 2. Check if product already exists in this user's cart
  const itemIndex = user.cart.findIndex(item => item.product.toString() === pid);

  if (itemIndex > -1) {
    // Product exists, increment quantity
    user.cart[itemIndex].quantity += 1;
  } else {
    // Product doesn't exist, push new item
    user.cart.push({ product: pid, quantity: 1 });
  }

  // 3. Save and populate
  await user.save();
  const updatedUser = await user.populate("cart.product");

  res.status(200).json({ 
    message: "Cart updated", 
    payload: updatedUser 
  });
  //check product
  let product = await ProductModel.findById(pid);
  console.log("product", product);
  if (!product) {
    res.status(401).json({ message: "Product not found" });
  }
  //perform update
  let modifiedUser = await UserModel.findByIdAndUpdate(
    uid,
    { $push: { cart: { product: pid } } },
    { new: true },
  ).populate("cart.product");
  //res
  res.status(200).json({ message: "Product added to cart", payload: modifiedUser });
});

//Read user by id
userRoute.get("/users/:uid", async (req, res) => {
  let { uid } = req.params;

  //find user
  let userObj = await UserModel.findById(uid).populate("cart.product", "productName price");
  //res
  res.status(200).json({ message: "user", payload: userObj });
});





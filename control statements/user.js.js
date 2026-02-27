const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name); 
console.log(user.email); 

user.LastLogin = "2026-01-01";
console.log(user.LastLogin);

user.role="admin";
console.log(user.role);
delete user.isActive;
console.log(user.isActive); //undefined

console.log(Object.keys(user));
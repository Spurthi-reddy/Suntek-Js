// Given Data
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// 1. Create a shallow copy
const userCopy = { ...user };

// 2.i Change name in copied object
userCopy.name = "Rahul";

// 2.ii Change preferences.theme in copied object
userCopy.preferences.theme = "light";

// 2.iii Log both objects
console.log("Original User:", user);
console.log("Copied User:", userCopy);
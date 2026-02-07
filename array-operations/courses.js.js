const courses = ["javascript", "react", "node", "mongodb", "express"];
//filter courses with name length>5
let res1=courses.filter(coursesObj=>coursesObj.length>5);
console.log(courses,res1);
//map to convert course name to uppercase
let res2=courses.map(coursesObj=>coursesObj.toUpperCase());
console.log(courses,res2);
// reduce() to generate a single string:
 //             "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
 let res3 = courses.reduce((courseStr, coursesObj) => {
    return courseStr === ""
        ? coursesObj.toUpperCase()
        : courseStr + " | " + coursesObj.toUpperCase();
}, "");
 console.log(res3);
 // find() the course "react"
 let res4=courses.find(coursesObj=>coursesObj==="react");
    console.log("found course:",res4);
//find index of course "node"
let res5=courses.findIndex(courseObj=>courseObj==="node");
console.log(res5);
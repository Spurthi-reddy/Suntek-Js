//API
let student={
    sno:1,
    name:"Ravi",
    age:22
}
 letstudentJSON={
    "sno":1,
    "name":"ravi",
    "age":22
 }

 let studentJSON=JSON.stringify(student)
 console.log("student json is",studentJSON);

 console.log(typeof studentJSON);
 let data=JSON.parse(studentJSON);//JSON to object
 console.log(data);
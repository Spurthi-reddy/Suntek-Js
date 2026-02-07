let students=[
    {sn0:1,name:'ravi',age:78},
    {sn0:2,name:'raju',age:65},
    {sn0:3,name:'ram',age:82},        
    {sn0:4,name:'ramesh',age:55}
];
//find students age<20
let result1=students.filter(StudentObj=> StudentObj.age<20)
console.log(students,result1);
//increment age of raju by 2 yrs
let result2=students.map(studentsObj=>{
    if(studentsObj.name==='raju'){
        studentsObj=studentsObj.age+=2;
    }
    return studentsObj;
})
console.log(result2);

//find the sum of ages of all students
let totalAge=students.reduce((acc,e)=>acc+e.age,0);
console.log(totalAge);
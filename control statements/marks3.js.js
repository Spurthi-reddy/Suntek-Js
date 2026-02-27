const marks = [78, 92, 35, 88, 40, 67];
//filter() marks ≥ 40 (pass marks)
let marks1=marks.filter(marksObj=>marksObj>=40);
console.log(marks);
console.log(marks1);
//map() to add grace marks of 5 to each subject
let marks2=marks.map(marksObj=>marksObj+5);
console.log(marks2);
//reduce to find highest mark
let marks3=marks.reduce((highest,marksObj)=>{
    return marksObj>highest?marksObj:highest;
})
console.log(marks3);
//find() first mark which is less than 40
let marks4=marks.find(marksObj=>marksObj<40);
console.log(marks4);
//findindex of 92
let marks5=marks.findIndex(marksObj=>marksObj===92);
console.log(marks5);
let marks=[10,30,89,75,45];
//filters(selection)
//get marks<70
let result1=marks.filter(element=>element<70);
console.log(result1);
//map(modification/transformation)
//add 5 marks to all
let result2=marks.map(element=>element+5);
console.log(result2);
//reduce(aggregation)
// find sum of array elements
let result4=marks.reduce((accumulator,element)=>accumulator+element,0);
console.log(result4);
//find smallest marks element
let small=marks.reduce((acc,e)=>acc<e?acc:e,marks[0]);
console.log(small);
//find elements
//find 30
let result5=marks.find(element=>element===30);
console.log(result5);
//FIND INDEX OF 30
let result6=marks.findIndex(element=>element===30);
console.log(result6);
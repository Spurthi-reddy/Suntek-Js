const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let total=0;
for(let key in marks){
    total+=marks[key];
}
console.log("total marks",total);

let average=total/Object.keys(marks).length;
console.log("average marks:",average);
let highest=0;
for(let key in marks){
    if(marks[key]>highest){
        highest=marks[key];
    }
}
console.log("highest marks:",highest);
marks.computer=90;
console.log(marks);
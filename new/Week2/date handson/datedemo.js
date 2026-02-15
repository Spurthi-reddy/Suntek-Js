let d1=new Date(2022,5,5);
let d2=new Date(2023,3,1);
//get difference
if(d1>d2){
    [d1,d2]=[d2,d1];
}
//get year
let year=d2.getFullYear()-d1.getFullYear();
console.log("year diff:",year);
let month=d2.getMonth()-d1.getMonth();  
if(month<0){
    year--;
    month=month+12;
}
console.log("month diff:",month);
let day=d2.getDate()-d1.getDate();
if (day<0){
    month--;
    day=30+day;
}
console.log("day diff:",day);
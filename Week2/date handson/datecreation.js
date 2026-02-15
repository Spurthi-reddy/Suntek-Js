let d1= new Date();
console.log(d1.toString());
/*Extract and display:
* Year
* Month (human readable)
* Date
* Day of week
* Hours, minutes, seconds*/
console.log("year",d1.getFullYear());
console.log("month",d1.getMonth()+1);
console.log("date",d1.getDate());
console.log("day",d1.getDay());
console.log("hours",d1.getHours());
console.log("minutes",d1.getMinutes());
console.log("seconds",d1.getSeconds());
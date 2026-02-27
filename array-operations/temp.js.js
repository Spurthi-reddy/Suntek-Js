const temperatures = [32, 35, 28, 40, 38, 30, 42]
let temp1=temperatures.filter(temperaturesObj=>temperaturesObj>35)
console.log(temperatures);
console.log(temp1);

let temp2=temperatures.map(temperaturesObj =>(temperaturesObj * 9/5) + 32)
console.log(temp2);

let temp3=temperatures.reduce((acc,e)=>{
    return acc+e;
})
let averageTemp=temp3/temperatures.length;
console.log(averageTemp);

let temp4=temperatures.findIndex(temperaturesObj=>temperaturesObj===28)
console.log(temp4);

console.log("first");
for(i=0;i<1000;i++){}
console.log("second");

//asynchronous demo
console.log("first");
setTimeout(()=>{
    console.log("second");
},1000);
console.log("third");
console.log("fourth");


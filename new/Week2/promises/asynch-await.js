//ravi made promise to kiran that he will call him after 10min
// create a promise(Kiran)
console.log("promise example");
let futureAvaliabilty=true;
let promiseObj=new Promise((fulfill,reject)=>{ 
    
    // first paramenter  is fullfill and b is rejectalways
    setTimeout(()=>{
        if(futureAvaliabilty==true){
            fulfill("i have got first rank");
        }
        else{
            console.log("sorry,i couldn't get first rank");
        }
    },5000);
})

promiseObj
.then((data)=>console.log("then method",data))//called when promised is fulfilled
.catch((error)=>console.log("catch method",error))//called when promise id rejected
//async and await




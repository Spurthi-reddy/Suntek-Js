let enrollmentDeadline = new Date("2026-01-20");
if(new Date()  > enrollmentDeadline){
    console.log("enrollment opened");
} 
else{
        console.log("enrollment closed");
    }
let userInputDate = new Date("2024-12-25");
//valid or not
if(isNaN(userInputDate.getTime())){
    console.log("invalid date");
}   
else{
    console.log("valid date");
}
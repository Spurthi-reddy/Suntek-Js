/*
// TODO: Export these validation functions
// 1. Validate task title (not empty, min 3 chars)*/
function validateTitle(title){
    if(title && title.length>=3){
        return true;
    }
    return false;
}
//validate priorit(must be :low,medium.high)
function validatePriority(priority){
    const validPriorities=["low","medium","high"];
    if(validPriorities.includes(priority)){
        return true;
    }   
    return false;
}
//validate due date(must be future date)
function validateDueDate(duedate){
    const now=new Date();
    if(duedate instanceof Date && duedate>now){
        return true;
    }   
    return false;

}
export {validateTitle,validatePriority,validateDueDate};

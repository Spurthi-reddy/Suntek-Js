//create a class with person datatype
class Person{
    pid;
    pname="joe";
    age;
    static{
        Person.collegeName="Anurag";
    }
    //methods
    getPersondata(){
        console.log(this.pid,this.age);
    }
    setData(age){
        this.age=age;

    }
    constructor(pid,age){
        this.pid=pid;
        this.age=age;

    }

}
    
let p1=new Person();
let p2=new Person();
p1.age=25;
p1.pid=101;
p1.getPersondata();
p2.setData(20);
p2.getPersondata();
let p3=new Person(1,2);
p3.getPersondata();

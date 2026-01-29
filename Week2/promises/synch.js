console.log("Restaurant order system");//nonblocking synchrnous
//3 members ordered food
//person1 ordered biryani(5secs)
setTimeout(() => {
    console.log("operson1 ordered biryani");
}, 5000);//blocking asynchhonrously
//person2 ordered curd rice(2secs)
setTimeout(() => {
    console.log("bperson2 ordered curd rice");
}, 2000);//block asynch
//person3 order water bottle(1sec)
setTimeout(() => {
    console.log("cperson3 ordered water bottle");
}, 1000);//block asynch

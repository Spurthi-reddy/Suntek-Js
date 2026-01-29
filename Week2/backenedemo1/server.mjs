//create http server
//import express module
import exp from 'express'
//create server
const app=exp()
//assign port number
app.listen(4000,() => console.log('http server listening on port 4000'));

//get req handling route(read users)
app.get('/users',(req,res)=>{
//sendres to client
res.json({"message":"this response from get request handler"})
})
//post req handling route(create users)
app.post('/users',(req,res)=>{
    //send req
    res.json({"message":"this response from post request handler"})
})
//put req handling route(update users)
app.put('/users/:id',(req,res)=>{
    //send res
    res.json({"message":"this response from put request handler"})
})
//delete req handling route(delete users)
app.delete('/users/:id',(req,res)=>{
    //send res
    res.json({"message":"this response from delete request handler"})
})  
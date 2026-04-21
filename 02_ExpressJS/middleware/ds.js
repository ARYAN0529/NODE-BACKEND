const express = require ("express");
const app = express();

//file transfer in an encoded way 

// we use express.json and urlencoded to encoded 
// the data at server

app.use(express.json());   //for json
app.use(express.urlencoded({extended:true}));

app.use(function (res,req,next){
    console.log("middle ware is working ");
    next(); //“I’m done here, pass control to the next middleware or route handler.”
})
app.get ('/',function (req , res ){
    res.send("hy we are online ");
})

app.get ("/home" , function (req ,res){
    res.send("welcome to home page ");
})

app.listen(3000);
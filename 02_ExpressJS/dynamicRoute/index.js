const path = require('path');
// console.log(path.join(__dirname , 'public'));


const express = require("express");
const app  =express()


//parsers -> they convert raw incoming data → usable JavaScript object
app.use(express.json())
app.use(express.urlencoded({extended:true }))
app.set('view engine','ejs');    // to render ejs pages 
app.use(express.static(path.join(__dirname , 'public'))); /// path de rahe hai ye
                                                        // public is foldernmame
app.get("/",function(req,res){
    res.render("index");
});

app.get ('/profile/:username',function(req,res){
    res.send(`hy ${req.params.username} its working`)
})

app.get('/profile/:username/:age',function(req,res){
    res.send(`hy it ${req.params.username} and age is ${req.params.age}`)
})
app.listen(3000,function(){
    console.log("app is listning ");
})
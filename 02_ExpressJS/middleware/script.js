const express =  require('express');
const app = express() ;


//App .use all time run 
app.use (function(req , res ,next){
    console.log('midddle ware chala ');
    next()    // request aage forword kardo ;
}) 

app.use (function (req ,res ,next){
    console.log("fetching details ");
    next()
})

//app.get  only use when we are on this route 
app.get ("/about" ,function(req , res) {
    res.send("champion hai tu") ;
})

app.listen(3000);
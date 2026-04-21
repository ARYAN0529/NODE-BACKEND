const express = require ('express');

const app = express();

app.get('/',function(req,res){
    res.send("i am groot ");
})

app.get('/dm',function(req,res){
    res.send("where are u kc ");
})

app.listen(3000);
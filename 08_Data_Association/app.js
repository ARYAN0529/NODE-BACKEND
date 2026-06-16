const express = require('express');
const app = express();

const userModel =require("./models/user");
const postModel = require("./models/posts");

app.get('/' , (req, res) => {
    res.send('hello aryan ');
});

app.get("/create" ,async function(req,res){
    let user = await userModel.create({
        username: "aryan",
        email:"aryandz0529@gmail.com",
        age:21
    })
    res.send(user);
})


app.get('/post/create' ,async function (req,res){
    let post = await postModel.create({
        postdata : "this is my first post",
        user: "6a31a72882f155366aeb5293"
    })
    
    let user = await userModel.findOne({ _id:"6a31a72882f155366aeb5293" });
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})
app.listen(3000);
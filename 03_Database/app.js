const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', ( req, res) => {
    res.send("hy");
})

app.get('/create',async (req,res) => {
  let createduser =  await userModel.create({
        name:"aryan_sharma",
        username : "Aryan",
        email:"aryandz0529@gmail.com"
     })
     res.send(createduser);
})

app.get('/update', async (req,res) => {
  let updateduser = await userModel.findOneAndUpdate({ name: "aryan_sharma" }, { name: "Aryan Sharma" } , { new: true });
  res.send(updateduser);
})

// app.get('/read', async (req, res) =>{
//     let users = await userModel.find() ;  // it read all 
//     res.send(users);
// })

app.get ('/read', async (req , res ) => {
        let readuser = await userModel.find({ name: "Aryan Sharma" }) ;  // it read only aryan 
        res.send(readuser);
    })

    app.get('/delete' , async (req , res ) => {
        let deletes = await userModel.findOneAndDelete({ name: "Aryan Sharma" }) ;
        res.send(deletes);
    })
app.listen(3000);
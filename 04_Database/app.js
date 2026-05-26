const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/users");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find(); // gets all users from DB
  res.render("read", { users }); // users is an array of all users from DB,
  // we are passing it to read.ejs file to render it on UI
});

app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id }); // to delete user by id
  res.redirect("/read");
});

app.get('/edit/:id', async (req ,res )=>{
  let user = await userModel.findOne({ _id: req.params.id }); // to find user by id and pass it to edit.ejs file
  res.render('edit',{user}); 
});

app.post('/update/:id' , async (req , res ) =>{
  let {image , name , email } = req.body;
  let user = await userModel.findOneAndUpdate({_id : req.params.id} , {image , name , email } ,{new : true})
  res.redirect('/read');
})

app.post("/create", async (req, res) => {
  let { url, name, email } = req.body;
  let createdUser = await userModel.create({
    image: url,
    name: name,
    email: email,
  });
  res.send(createdUser);
});

app.listen(3000);

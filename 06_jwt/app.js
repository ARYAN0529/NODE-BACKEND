const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public:")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
        if (!user) {
             res.send("something went wrong");
        }                           //user ke account wala password 
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: user.email }, "secretkey");
      res.cookie("token", token);
        res.send("logged in successfully");
     }
      else res.send("something went wrong");
        });
    });

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "secretkey");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.listen(3000);

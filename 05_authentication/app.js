const cookieParser = require("cookie-Parser");
const express = require("express");
const app = express();
app.use(cookieParser());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// app.get('/',function (req , res) {
//     res.cookie('name','Aryan'); //set kar rahe hai
//     res.send("hello world");
// })

// app.get("/", function (req, res) {
//   bcrypt.genSalt(10, function (err, salt) {
//     //salt is algo used to generate random string
//     bcrypt.hash("password", salt, function (err, hash) {
//       console.log(hash); //  hash password encrypted
//     });
//   });
// });



// app.get("/read", function (req, res) {
//   console.log(req.cookies);
//   res.send("read page ");
// });


app.get('/' , function (req , res ) {
  let token = jwt.sign({email:"aryan@gmail.com"},"secret");
    console.log(token);
});

app.listen(3000);

const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);
                                            // db name 
const userSchema =new mongoose.Schema ({
    // schema matalb -> har user ke pass kya kya ho 
    
    name : String,
    username:String,
    email: String
})
                   //model name, //schema
module.exports = mongoose.model("user" , userSchema);
// model name -> users
// model use to perform create , read , update , delete 


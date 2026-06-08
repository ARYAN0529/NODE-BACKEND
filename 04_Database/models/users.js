const mongoose = require('mongoose');

// ✅ MongoDB runs on port 27017, NOT 3000
mongoose.connect("mongodb://127.0.0.1:27017/authtest");

const userSchema = new mongoose.Schema({
    image: String,
    name: String,
    email: String
});

module.exports = mongoose.model('user', userSchema);
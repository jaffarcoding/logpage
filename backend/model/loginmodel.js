const mongoose = require("mongoose");
const validator = require("validator");

const loginpage = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: [true,"please Enter email"],
        validate: [validator.isEmail,"please enter valid email"],
    },
    password:{
        type: String,
        unique: true,
        required: [true, "please enter your password"],
        select: false,
    }
})

module.exports = mongoose.model("User", loginpage);
const User = require("../model/loginmodel");
// const JWT_SECRET = "jkhdhfkjwefuwefw";
// const jwt = require("jsonwebtoken");
 const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email,password});
        if(!user){
            res.json("notexist")
        }else{
            res.json("succerfully")
        }
    } catch (error) {
        res.json("loding")
    }
}


module.exports = login
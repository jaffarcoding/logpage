const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const mongodb = "mongodb://localhost:27017/loginpage"
 const connecttodata = ()=>{
    mongoose.connect(mongodb,{ useUnifiedTopology: true}).then((c)=>{
        console.log(`mongodb connect to ${c.connection.host
        }`);
    }).catch((e)=>{
        console.log(e);
    })
}

module.exports = connecttodata;
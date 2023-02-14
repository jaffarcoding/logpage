const app = require('./app')
const connecttodata = require("./database")
const PORT = 4000;
connecttodata();
app.listen(PORT, () =>{
    console.log(`server is running on  http://localhost:${PORT}`);
})

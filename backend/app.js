const express = require("express");
const cookiesparser = require("cookie-parser");
const app = express();



app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookiesparser());

const login = require("./controler/logincontrole");
const UserRoutes = express.Router();

UserRoutes.route("/login").post(login)
 app.use("/api/ir",UserRoutes);
module.exports = app

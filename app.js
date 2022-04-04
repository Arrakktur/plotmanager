const express = require("express");
 
const app = express();
 
app.use(express.static(__dirname + "/dist/plotmanager"));
app.use("/home", express.static(__dirname + "/dist/plotmanager"));
app.use("/projects", express.static(__dirname + "/dist/plotmanager"));
app.use("/profile", express.static(__dirname + "/dist/plotmanager"));
app.use("/project-detail", express.static(__dirname + "/dist/plotmanager"));
app.use("/friends", express.static(__dirname + "/dist/plotmanager"));
app.use("/messages", express.static(__dirname + "/dist/plotmanager"));
app.use("/person-detail", express.static(__dirname + "/dist/plotmanager"));

app.listen(3000);
const express = require("express");
const app = express();
require("./db/conn");
const router = require("../src/router/router");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

require('dotenv').config();
var port = process.env.PORT || 3000 ;

var path = require("path");

app.use(express.static('public'))  // i think we are reduced the cord
app.use(express.static(path.join(__dirname,'../public')));  // for static image i think use
var ejs = require("ejs");
var ejs_folder_path = path.join(__dirname, "../templates");
app.set("view engine", "ejs");
app.set("views", ejs_folder_path); 

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const cors = require("cors");
app.use(express.json());
// app.use(cors({origin:true, credentials: true}));
// app.use(cors({
//   origin: "http://192.168.29.64:4000"
// }))  // this is two alternative opsion 
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

//reqiure config env file
const dotenv = require("dotenv");

const connectDabase =require("./config/database");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//setting up config.env file variables
dotenv.config({path : "./config/config.env"});

//connecting database
connectDabase();



//importing routes
const studentAuth = require("./routers/auth_students");
const adminAuth = require("./routers/auth_admin");



//using imported routes
app.use("/sms/v1", studentAuth);
app.use("/sms/v1", adminAuth);









const PORT = process.env.PORT;

const server = app.listen(PORT, () =>{
    console.log(`Server started on port ${process.env.PORT}`);
});
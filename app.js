const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//importing routes
const studentAut = require("./routers/auth_students");



//using imported routes
app.use("/sms/v1", studentAut);


app.listen(5000, function(){
  console.log("server is running on port 5000");
})

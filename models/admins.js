const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const adminSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : [true, "Please enter your name"]
    },
    lname : {
        type : String,
        required : [true, "Please enter your name"]
    },
    email : {
        type : String,
        required : [true, "Please enter your address"],
        unique : true,
        validate : [validator.isEmail, "Please enter valid email address"]
    },
    password : {
        type : String,
        required : [true, "Please enter password for your account"],
        minlength : [8, "Your password must be at least 8 characters"],
        select : false
    },
     role : {
        type : String,
        enum : {
            values : ["admin", "teachers"],
            message : "Please select correct role"
        },
        default : "admin"
    },
    createAt : {
        type : Date,
        default : Date.now
    },
  
});

//Encrypting password before saving
adminSchema.pre("save", async function(next) {

    if(!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)

});
//Return JSON Web Token
adminSchema.methods.getJwtToken = function(){
    return jwt.sign({id : this._id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRES_TIME 
    })
};

//compare user password in database password
adminSchema.methods.comparedPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};

module.exports = mongoose.model("admin", adminSchema);
const mongoose = require("mongoose");
const validator = require("validator");


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
    createAt : {
        type : Date,
        default : Date.now
    },
  
});

//Encrypting password before saving
// userSchema.pre("save", async function(next) {

//     if(!this.isModified("password")) {
//         next();
//     }
//     this.password = await bcrypt.hash(this.password, 10)

// });


module.exports = mongoose.model("admin", adminSchema);
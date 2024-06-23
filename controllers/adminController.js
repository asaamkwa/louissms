const Admin = require("../models/admins");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");


//Register a new user => /api/v1/register
exports.registerAdmin = catchAsyncErrors ( async (req, res, next) => {

    const {fname, lname, email, password, role} = req.body;


    const user = await Admin.create({
        fname,
        lname,
        email,
        password,
        role
    });
     //sendToken(user, 200, res);
    
//note it will change later
     res.redirect("/sms/v1/AdminDashboard");
          
});


//Login user => /api/v1/login
exports.loginAdmin = catchAsyncErrors ( async (req, res, next) => {
    const {email, password} = req.body;

    //checks if email or password is entered by user
    if(!email || !password) {
        return next(new ErrorHandler(`Please enter email & password.`, 400));
    }

    //Finding user in the database
    const user = await Admin.findOne({email}).select(`+password`);

    if(!user) {
        return next(new ErrorHandler(`Invalid Email or Password.`, 401));
    }

    //check if password is correct
    const isPasswordMatched = await user.comparedPassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler(`Invalid Email or Password.`, 401));
    }
   res.redirect("/sms/v1/AdminDashboard");
   //sendToken(user, 200, res);

   
   
});

exports.logoutAdmin = (req, res, next) => {
     res.render("admin/admins/admin_reg/login_admin");
};


//admins ......................................
exports.getAdminDashboard = (req, res, next) => {
    res.render("admin/adminDashboard");
};

exports.addAdmin = (req, res, next) => {
    res.render("admin/admins/admin_reg/add_admin");
}

exports.loginPage = (req, res, next) => {
    res.render("admin/admins/admin_reg/login_admin");
}

exports.allAdmin = (req, res, next) => {
   
     async function getItems(){
        const allAdmin = await Admin.find({});
          return allAdmin;

     }
       getItems().then(function(foundAdmins){
        res.render("admin/admins/admin_reg/all_admin", {workers: foundAdmins});

  });
};



//admins ends ...........................


// students sector ...........................
exports.addStudents = (req, res, next) => {
    res.render("admin/students/student_reg/student_add");
};


exports.all_students = (req, res, next) => {
    res.render("admin/students/student_reg/all_students");
};
// students sector end ...........................



// teachers sector ...................................

exports.add_teachers = (req, res, next) => {
    res.render("admin/teachers/teacher_reg/add_teacher");
};



exports.all_teachers = (req, res, next) => {
    res.render("admin/teachers/teacher_reg/view_teachers")
}
// teachers sector end .................................
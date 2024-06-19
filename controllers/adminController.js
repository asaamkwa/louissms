const Admin = require("../models/admins");


//Register a new user => /api/v1/register
exports.registerAdmin =  async (req, res, next) => {

    const {fname, lname, email, password} = req.body;


    const user = await Admin.create({
        fname,
        lname,
        email,
        password
    });
//note it will change later
     res.redirect("/sms/v1/AdminDashboard");
          
};


//admins ......................................
exports.getAdminDashboard = (req, res, next) => {
    res.render("admin/adminDashboard");
};

exports.addAdmin = (req, res, next) => {
    res.render("admin/admins/admin_reg/add_admin");
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
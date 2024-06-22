const express = require("express");
const router = express.Router();


const {
    getAdminDashboard,
    addAdmin,
    registerAdmin,
    allAdmin,
    loginAdmin,
    loginPage,
    logoutAdmin,

    //students 
    addStudents,
    all_students,

    //teachers
    add_teachers,
    all_teachers

} = require("../controllers/adminController");

//all about admins
router.route("/AdminDashboard").get(getAdminDashboard);
router.route("/add/admin").get(addAdmin);
router.route("/register/admin").post(registerAdmin);
router.route("/all/admins").get(allAdmin);
router.route("/loginPage").get(loginPage);
router.route("/login/admin").post(loginAdmin);
router.route("/logout/admin").get(logoutAdmin);





// all abouts students
router.route("/add/student").get(addStudents);
router.route("/all/students").get(all_students);


// all about teachers
router.route("/add/teacher").get(add_teachers);
router.route("/all/teacher").get(all_teachers);



module.exports = router;
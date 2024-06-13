const express = require("express");
const router = express.Router();





const {
    getStudent
   
} = require("../controllers/studentController");

router.route("/studentProfile").get(getStudent);


module.exports = router;
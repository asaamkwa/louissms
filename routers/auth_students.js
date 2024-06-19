const express = require("express");
const router = express.Router();





const {
    getStudent,
    resultsTable
   
} = require("../controllers/studentController");

router.route("/studentProfile").get(getStudent);
router.route("/resultsTable").get(resultsTable);


module.exports = router;
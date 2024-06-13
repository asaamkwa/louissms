//Register a new user => /api/v1/register
exports.getStudent = (req, res, next) => {
    
    res.render("students/student_profile");
    // res.status(200).json({
    //     success : true,
    //     message : "This router will display future students profiles"
    //  })
};



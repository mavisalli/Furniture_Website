const Admin = require("../models/Admin");

module.exports = (req, res, next)=> {

    Admin.findById(req.session.adminID, (err,admin)=> {
        if(err || !admin) return res.redirect("/login");
        next();
    })

}

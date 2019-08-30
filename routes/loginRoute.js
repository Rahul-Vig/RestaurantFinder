var db = require("../models");

module.exports = function(app) {
  app.post("/", function(req, res) {
    console.log(req.body);
    db.Admin.findOne({
      where: { username: req.body.username, password: req.body.password }
    }).then(found => {
      if (found != null) {
        console.log("Admin Logged In");
        res.json({ success: true });
      } else {
        console.log("Incorrect Credentials");
        res.json({ success: false });
      }
    });
  });
};

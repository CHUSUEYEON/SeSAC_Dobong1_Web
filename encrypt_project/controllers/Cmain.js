const models = require("../models/index");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  res.render("register");
};

// models.User.create({
//   userid: req.body.userid,
//   name: req.body.name,
//   pw: req.body.pw,
// }).then((result) => {
//   console.log("회원가입 요청", result);
//   res.end();
// });

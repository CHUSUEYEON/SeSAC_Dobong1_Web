const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.axios = (req, res) => {
  console.log(req.body);
  //   console.log(User.usersInfo());
  if (
    req.body.id !== User.usersInfo().id &&
    req.body.pw !== User.usersInfo().pw
  ) {
    res.send({
      usersInfo: req.body,
      isUser: false,
    });
  } else {
    res.send("connect!!!");
  }
};

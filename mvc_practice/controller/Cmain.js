const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.axios = (req, res) => {
  console.log(req.body);
  //   console.log(User.usersInfo());
  const { id: clientId, pw: clientPw } = req.body;
  if (clientId === User.usersInfo().id && clientPw === User.usersInfo().pw) {
    res.send({
      usersInfo: req.body,
      isUser: true,
    });
  } else {
    res.send({ isUser: false });
  }
};

// TODO: 컨트롤러 코드
// const models = require("../models/index");
const models = require("../models/index");
// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
  //   console.log("controller", req.body);
  //   //{userid, pw, name}
  //   User.post_signup(req.body, () => {
  //     res.end();
  //   });
  //   const sql = `INSERT INTO user(userid, name, pw)
  //     VALUES('${req.body.userid}', '${req.body.name}', '${req.body.pw}')`;

  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 요청", result);
    res.end();
  });
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  //   console.log("controller", req.body);
  //   // {userid, pw}
  //   User.post_signin(req.body, (result) => {
  //     console.log("controller", result);
  //     // 로그인 성공시, true를 뷰로 전달
  //     // 로그인 실패시, false를 뷰로 전달

  //     if (result.length > 0) {
  //       // res.send({isLogin:true, userInfo:result[0]});
  //       res.send(true);
  //     } else {
  //       res.send(false);
  //     }
  //   });

  //[sequelize 적용]
  // findOne은 Limit 필요없음.
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
    // {} findOne은 무조건 하나만 SELECT! => length 사용불가
    // result: findOne을 이용해서 찾은 결과를 반환 or
    // 데이터를 못찾았다면 Null 반환
    //-> result는 {} or null
  }).then((result) => {
    console.log("로그인 요청", result);
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

//POST /user/profile
// 프로필 페이지 요청
exports.post_profile = (req, res) => {
  //   console.log("req.body", req.body);
  //   // {userid}
  //   User.post_profile(req.body.userid, (result) => {
  //     console.log(result); //{id, userid, name, pw}
  //     res.render("profile", { data: result });
  //   });

  //[sequelize 적용]
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    console.log("프로필 페이지 요청", result);
    res.render("profile", { data: result });
  });
};

//POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = (req, res) => {
  //   console.log("req.body", req.body);
  //   User.edit_profile(req.body, () => {
  //     res.end();
  //   });
  //[sequelize 적용]
  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    //값이 하나(1(성공) or 0(실패)) 뿐이기에 result 없어도 상관은 없으나 확인 위해 보는 것(console) - delete도 마찬가지
    // where 조건에 해당하는 레코드를 못찾았을 때 실패
    console.log("회원 정보 수정", result);
    res.end();
  });
};

//POST /user/profile/delete
//회원 정보 삭제
exports.delete_profile = (req, res) => {
  //   console.log("req.body"); //{id:form.id.value}
  //   User.delete_profile(req.body.id, () => {
  //     res.end();
  //   });

  //[sequelize 적용]
  models.User.destroy({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("회원 정보 삭제", result);
    res.end();
  });
};

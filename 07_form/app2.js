const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views/practice");

//body.parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //json 형식으로 데이터를 주고 받음

// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.get("/getform", function (req, res) {
//   console.log(req.query);
//   // res.send("데이터 잘 받았습니다.");
//   res.render("result", {
//     title: "GET",
//     userInfo: req.query, //{id:'', email:'', password:''}
//   });

//   //res.rednder('뷰', {보내줄 데이터})
// });

// app.post("/postForm", function (req, res) {
//   //post 요청은 request.body에 담겨서 옵니다!
//   console.log(req.body);
//   // res.send("포스트 요청 성공~~!");
//   // res.send(`
//   // <ul>
//   //   <li>${req.body}</li>
//   //   <li>${req.body}</li>
//   // </ul>
//   // `)
//   console.log("안녕하세요.");
//   res.render("result.ejs", {
//     title: "POST",
//     userInfo: req.body, //{id2:'', pw2:'', agree:''}
//   });
// });

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });

// --------------실습(practice)--------------------------

app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

app.get("/getForm2", function (req, res) {
  console.log(req.query);
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

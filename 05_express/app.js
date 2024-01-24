const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views"); //여기에 ejs 파일을 모아둘 거라는 뜻!
app.use("/static", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  //   response.send("hello express!! 안녕하세요 익스프레스");

  // render의 두번째 인자에서
  //index.ejs에서 사용할 정보 전달
  response.render("index.ejs", {
    btns: ["apple", "banana"],
    isLofing: false,
    userInfo: {
      name: "allie",
      msf: "are you ok?",
    },
  });
});

// 라우팅
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// app.post('/login',(req,res)=>{
//   req.body
// })

//page not found, 404 페이지는 라우팅 과정 중 맨 마지막에 설정
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT);
});

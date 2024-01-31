const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("practice2");
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// app.post("/", (req, res) => {
//   res.render("practice2");
// });

const a = "hello123";
const b = "1234";

app.post("/axios", function (req, res) {
  console.log(req.body);
  // const id = req.body.id;
  // 서버의 계정 정보와, 클라이언트의 계정정보가 일치하는지 체크하는 코드가 필요
  const { id: clientId, pw: clientPw } = req.body; //구조분해할당으로 ejs에서 쓴 id와 pw를 가지고 옴.
  if (clientId === a && clientPw === b) {
    res.send({
      userInfo: req.body,
      // ...req.body, 이걸로 해도 됨.
      isUser: true,
    });
  } else {
    res.send({
      isUser: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

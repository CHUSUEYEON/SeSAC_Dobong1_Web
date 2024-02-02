const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads")); //이렇게 미들웨어를 설정해야 result.ejs가 이 경로로 파일을 찾을 수 있음.
app.use("/public", express.static(__dirname + "/public")); //css 파일 링크하기 위한 미들웨어

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      //destination(req, file, done)
      cb(null, "uploads/"); //{ done(null, "uploads/ - 파일 어디에 저장할지!, 이때 destination으로는 uploads 파일이 자동으로 안 만들어져서 내가 만들어야 함.")}
    },

    filename: function (req, file, done) {
      //filename(req, file, done)
      const extension = path.extname(file.originalname); //확장자 추출(extname)을 위한 코드.
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //바이트기준으로 몇 바이트까지 가능한지에 대한 설정
});

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.render("index");
});

// app.post("/reset", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

app.post("/upload", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file.path);
  console.log(req.body);
  res.render("result", {
    userInfo: req.body,
    path: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!!`);
  console.log(`http://localhost:${PORT}`);
});

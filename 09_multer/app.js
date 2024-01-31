//npm install express ejs -> npm i express ejs(모듈 설치 축약형)

const express = require("express");
const multer = require("multer"); //require는 보통 위에 몰아서 씀
const path = require("path");
const app = express();
const PORT = 8000;

//미들웨어
//view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

//static 폴더 설정(프론트에서 사용하는 애들의 모음.)
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));
//app.use('/이 이름으로 사용할 것', express.static('실제 폴더 경로')) : 여러 개 설정 가능
// console.log("현재 위치한 폴더의 경로", __dirname);

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//multer
const upload = multer({
  //1. 이름 맘대로 저장되는 버전.
  dest: "uploads/", //파일을 업로드에서 전송을 하면 저장할 파일임.
});

const uploadDetail = multer({
  //2. 이름과 확장자를 디테일하게 저장되는 버전
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); //확장자 추출 함수
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      ); //파일이 여러개일수도 있어서 현재시간함수(밀리초와 관련되게 나옴, 중복되지 않게 하기 위해)를 붙임.
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

//라우팅
app.get("/", (req, res) => {
  res.render("index");
  //   res.send("hihi");
});

// app.post("/upload", upload.single("userFile"), (req, res) => {
app.post("/upload", uploadDetail.single("userFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //   {
  //     fieldname: 'userFile', //폼에 정의한 name 값
  //     originalname: 'pooh.png', //원본 파일명
  //     encoding: '7bit', //file encoding type
  //     mimetype: 'image/png', //파일타입
  //     destination: 'uploads/', //파일 저장 경로
  //     filename: '2fa8c0b7d69a5e826466cb2296f152d1', //저장된 파일 이름
  //     path: 'uploads/2fa8c0b7d69a5e826466cb2296f152d1', //경로 포함된 파일이름
  //     size: 718119 //byte 기준 파일 크기
  //   }
  res.send("파일 업로드 완료^^");
});

app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  console.log(req.files); //[{..}, {}] 배열로 요청됨, 파일을 하나만 업로드해도 배열
  console.log(req.body); //파일 외의 정보
  res.send("파일 업로드 완료^^");
});

app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  function (req, res) {
    console.log(req.files);
    console.log(req.files.file1[0].originalname);
    /*
{file1: [{},{}], file2: [{}], name속성:[{},{}, ..]}
*/

    console.log(req.body);
    res.send("업로드 완료 ~~~");
  }
);

//동적 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  //   res.send({ ...req.file, ...req.body });
  res.send({ title: req.body, fileInfo: req.file });

  /*
  {
    title: '푸',
    fileInfo: {
  //     fieldname: 'userFile', //폼에 정의한 name 값
  //     originalname: 'pooh.png', //원본 파일명
  //     encoding: '7bit', //file encoding type
  //     mimetype: 'image/png', //파일타입
  //     destination: 'uploads/', //파일 저장 경로
  //     filename: '2fa8c0b7d69a5e826466cb2296f152d1', //저장된 파일 이름
  //     path: 'uploads/2fa8c0b7d69a5e826466cb2296f152d1', //경로 포함된 파일이름
  //     size: 718119 //byte 기준 파일 크기
  //   }
    }
  */
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});

/*
multer 디테일 설정
- storage: 저장공간에 정보
    - diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
    - destination: 저장 경로
    - filename: 파일 이름 관련 정보
- limits: 파일 제한 관련 정보
    - fileSize: 파일 사이즈를 바이트 단위로 제한
*/

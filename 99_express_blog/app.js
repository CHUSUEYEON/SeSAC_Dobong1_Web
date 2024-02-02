const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8080;

/* temp DB
    임시 데이터 배열혀태로 만들어서 화면에 띄워주는 작업
*/

let tempDB = [
  {
    contentID: 1,
    title: "글제목1",
    content: "글내용1 hi hi hi",
    img: null, //null or path(string)
  },
  {
    contentID: 2,
    title: "글제목2",
    content: "글내용2 How are you?",
    img: null, //null or path(string)
  },
  {
    contentID: 3,
    title: "글제목3",
    content: "글내용3 Good luck",
    img: null, //null or path(string)
  },
  {
    contentID: 4,
    title: "글제목4",
    content: "글내용4 Have a nice day",
    img: null, //null or path(string)
  },
];

const userID = "Tndus🫶";

//미들웨어 설정
/*
    미들웨어란?
    요청(req)과 응답(res) 사이에서 중간다리 역할을 하는 SoftWare
    ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
    ex2) request의 file에서 보내는 파일ㅇ 정보를 확인할 수 있도록 도와주는 "multer"
    ex3) static 파일 설정을 도와주는 app.use(express.static(~~))
*/

/* 미들웨어1. views 설정(set() 이용) 
    - view란?
        사람들 눈에 보이는 화면, 프론트단 html
        view 설정
        1. html 파일들을 어디서 모아둘건지(views 폴더 설정)
        2. html을 보여주기 위해서 어떻게 할건지 (view engine)
    - view engine(ejs)
        서버에서 보낸 js 변수를 클라이언트에서 사용할 수 있도록 도움
        pug, ejs, nunjucks, ... 등이 있지만 html과 가장 유사한 것은 ejs
*/

app.set("view engine", "ejs");
app.set("views", "./views");

/*
    미들웨어2. static 폴더 설정
    - static 폴더란?
    외부(브라우저 등의 client)에서 접근 가능한 폴더
    프론트 js, css, 이미지, 동영상 ...
*/

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

/*
    미들웨어3. body-parser 설정(express 내장 모듈)
    - request.body 기본적으로 undefined
    body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱(parsing)해줌.
*/

// true: queryString 모듈 사용, false: qs 모듈 사용(보안적으로 성능 더 좋음)
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //요청 body에서 json 정보만 가지고 오도록

/*
    미들웨어4. multer 설정(npm install multer, 설치 필요)
    - req.body input type="file"의 정보는 string -> 미들웨어를 통해 객체로 받아들여서 업로드!
      실제 파일 업로드를 하고, 파일 정보를 확인하기 위해 사용
*/

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      //destination(req, file, done)
      cb(null, "uploads/"); //{ done(null, "uploads/ - 파일 어디에 저장할지!, 이때 destination으로는 uploads 파일이 자동으로 안 만들어져서 내가 만들어야 함.")}
    },

    filename: function (req, file, done) {
      // extname(파일명): 확장자 추출
      // basename(파일명, 확장자): 확장자를 제외한 파일명 추출
      // basename(경로명):(확장자 포함) 파일명 추출

      const extension = path.extname(file.originalname); //확장자 추출(extname)을 위한 코드.
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //바이트기준으로 몇 바이트까지 가능한지에 대한 설정
});

// ### 라우팅
/*
    특정 url로 특정 method에 대한 요청 처리
    - url: 사용자가 정한 url
    - method: get, post, put, patch, delete
      CRUD를 위한 것(CRUD: 데이터를 create, read, update, delete)
      1. get: 'R'ead, 
      브라우저의 url에 주소를 입력하는 것은 모두 get요청!!
      localhost:8080/sesac 의 화면을 보기 위해서는 
      /sesac의 get요청에 대한 응답(response)이 있어야 볼 수 있다.
      : res.send(), res.end(), res.write(), res.render(), ...
      - send, end, render: 응답이 끝남
      - write는 응답이 끝나지 않아서 반드시 아래에 끝내는 코드를 적어줘야 함.

      2. post: 'C'reate, 새로운 정보를 '입력' '추가'할 때

      3. put & patch: 'U'pdate, 수정 관련 method
      put: 전체 수정
      patch: 일부 수정
      위에 DB에서 아이디만 고칠경우 patch로 수정, 전체 다 수정할 경우 put (post로도 수정 가능!)

      4. delete: 삭제
*/

app.get("/", (req, res) => {
  res.render("index", {
    user: userID,
    contentData: tempDB, //[{},{}] 이런 형태!
  });
});

// app.get('/content/1', (req,res)=>{})
// app.get('/content/2', (req,res)=>{})
// app.get('/content/3', (req,res)=>{})
// app.get('/content/4', (req,res)=>{}) -> 이런식으로 해도 되지만 너무 비효율적. 그래서 아래와 같이 파라미터를 이용할거임.

//

/*
    params vs. query
    -params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params에서 정보 확인 가능 {params: '123'}
        - 네이버 블로그처럼 여러 계정의 글을 "조회"할 때 == params
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=123&content=123
        - req.query에서 정보 확인 가능{id: '123', content: '123'}
        - 검색, 필터링 기능 == query
*/

//content/1 content/2 content/3, , ...
app.get("/content/:contentID", (req, res) => {
  console.log(req.params); //{contentID: '1' }
  //   req.params.contentID

  // tempDB의 contentID와 params로 들어오느는 contentID 비교
  const { contentID } = req.params;
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0];

  console.log(isContent); // {} or undefined

  /*
    // { contentID: 1,
    // title: "글제목1",
    // content: "글내용1",
    // img: null, //null or path(string)
    // }
*/

  if (isContent) {
    res.render("content.ejs", isContent);
    // res.render("content.ejs", {
    //     ...isContent,
    //     userName: "allie",
    // });
  } else {
    res.render("404");
  }
  // res.send("hi");
});

//새글 작성하기 화면 렌더링
// /content/write 는 write를 params로 파악할 수 있음
app.get("/write", function (req, res) {
  res.render("writeContent");
});

app.post("/blog/post", uploadDetail.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1, //이해안감. 질문
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null, //null or path(string) : 이미지가 들어올 수도 있고, 아닐 수도.
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);
  // res.send("okokokok");
  res.end();
});

app.get("*", (req, res) => {
  res.render("404");
}); //반드시 맨 아래에 404페이지 렌더링하기.

// ### 포트열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

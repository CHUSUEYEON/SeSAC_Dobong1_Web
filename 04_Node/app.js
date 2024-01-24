const http = require("http"); //하나의 객체
const fs = require("fs");

const PORT = 8080;
const server = http.createServer(function (request, response) {
  // console.log(request.url);
  const data = fs
    .readFileSync("./index.html")
    .response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // response.writeHead(상태코드, 헤더정보)
  // - text/html : 응답의 콘텐트 혀식이 HTML 이라는 의미
  // - 인코딩 방식이 utf-8

  response.write(data);
  response.end();
  // response.write('응답완료!')
  // response.end('<h3>진짜 완료!!</h3>')

  /*
  예외처리 try{~ }catch(err){}문
  try 스코프 내부 문장에서 오류가 났을 때 catch 문으로 err를 보냄
  */
  try {
    const data = fs;
    readFileSync("./idex.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    // response.writeHead(상태코드, 헤더정보)
    // - text/html : 응답의 콘텐트 혀식이 HTML 이라는 의미
    // - 인코딩 방식이 utf-8

    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    const data = fs.readFileSync("./404/html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } finally {
    // 예외 발생과 상관없이 모두 실행시키고 싶은 경우 작성
    console.log("성공 실패 모두 실행됩니다.");
  }
});

//1. request 이벤트: 클라이언트 요청
server.on("request", function () {
  console.log("request 이벤트 실행!");
});

//2. connection 이벤튼: 클라이언트 접속했을 때 발생
server.on("connection", (req, res) => {
  console.log("connection 이벤트 발생");
});

server.listen(8080, function () {
  console.log("server is open!!");
  console.log(`http://localhost:${PORT}`);
});

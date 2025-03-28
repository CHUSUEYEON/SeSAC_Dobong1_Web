const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("talk_dm");
});

const nickInfo = {};
//{socket.id : nickname} 형식으로 저장
// ex> { '607MMmhZ_k1DI0Q-AAAH': 'aaaa' }
io.on("connection", (socket) => {
  //[닉네임 사용2]
  // 닉네임 중복 체크 후 중복 아닐 때만
  // nickInfo에 정보 추가
  socket.on("checkNick", (nickname) => {
    console.log("nickInfo :: ", nickInfo);
    console.log(">>>>>", Object.values(nickInfo)); //nickInfo에 있는 값을 배열로 내보내줌(중복검사를 하기위한 코드)

    //["a", "b", "c", "d"].indexOf("b") === 1
    //["a", "b", "c", "d"].indexOf("f") === -1 >> 없는 값을 넣으면 -1이 나옴
    // 지금 들어온 닉네임과 중복되는 값이 있는지 검사
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      // 중복된 데이터
      // (1) 입장 실패, 닉네임 중복 시 에러메시지를 클라이언트에게 보낸다.
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      nickInfo[socket.id] = nickname; //socket.id에 nickname 정보 넣기
      //중복되지 않은 데이터
      // (2) 입장 성공, 나의 닉네임 정보 나에게 전달
      socket.emit("entrySuccess", nickname);
      // (3) 입장 성공, ~~~님이 입장하셨습니다. 알림메시지 전달(나 제외)
      socket.broadcast.emit("notice", `${nickname}님이 입장하셨습니다.`); //나 빼고 보낼 때

      // (4) 입장 성공, 전체 클라이언트에게 updated nickInfo 전달(나 포함)
      io.emit("updateNicks", nickInfo);
    }
  });
  //[실습 3번] 입장-1
  // console.log(socket.id);
  //   io.emit //나 포함해서 보내는 것
  // socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다.`); //나 빼고 보낼 때

  //   [실습4] 채팅 주고받기
  //  [4-2] 메시지를 전달 받아서, 전체에게 메시지 뿌려주기
  socket.on("send", (msgData) => {
    // console.log(`${socket.id}: ${message}`);
    if (msgData.dm === "all") {
      //전체에게 메시지 보내기
      io.emit("message", { id: msgData.myNick, message: msgData.msg });
    } else {
      // 특정 socket.id(msgData.dm)를 가진 클라이언트에게 메시지 보내기
      // io.to(소켓아이디).emit();
      // 특정 소켓아이디를 가진 클라이언트를 가진 클라이언트에게 emit 작업

      // dm, 특정 socket.id를 가진 클라이언트.. 나 포함x(내가 보낸 메시지가 내 채팅방에 안 나옴)
      io.to(msgData.dm).emit("message", {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,
      });

      // 나에게만 데이터 보내주기
      socket.emit("message", {
        id: msgData.myNick,
        message: msgData.msg,
        isDm: true,
      });
    }
  });

  // 퇴장
  socket.on("disconnect", () => {
    //(1) ~~님이 퇴장하셨습니다. 공고 화면에 띄우기
    io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
    //(2)nickInfo{}에서 특정 키 삭제
    delete nickInfo[socket.id];
    //(3)객체 변경 후 클라이언트에게 변경된 객체 정보 전달
    io.emit("updateNicks", nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

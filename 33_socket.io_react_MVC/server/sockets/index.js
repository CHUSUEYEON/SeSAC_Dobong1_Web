const socketIO = require("socket.io");
function socketHandler(server) {
  //server:app.js에서 http 기반 서버 전달받을 예정
  // cors: 다른 서버에서 보내는 요청

  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000", //react server와 통신하기 위한
    },
  });

  io.on("connection", (socket) => {
    socket.on("test", (message) => {
      console.log(message);
      socket.emit("test2", "잘 받았습니다.");
    });

    socket.on("hello", (res) => {
      console.log("client:", res);
      socket.emit("hello2", res + ": 안녕하세요.");
    });
    socket.on("study", (res) => {
      console.log("client:", res);
      socket.emit("study2", res + ": 혜인아, 공부하자");
    });
    socket.on("bye", (res) => {
      console.log("client:", res);
      socket.emit("bye2", `${res}: 잘가요`);
    });
    socket.on("disconnect", () => {
      // 클라이언트 연결 해제
    });
  });
}

module.exports = socketHandler;

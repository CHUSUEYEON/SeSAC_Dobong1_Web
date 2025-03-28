import { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});

export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect(); //클라이언트 소켓에 접속
    // console.log("after connect", socket.connected);
  };
  initSocketConnect();
  useEffect(() => {
    socket.on("bye2", (res) => {
      console.log(res);
      setFromServerStr(res);
    }); // 받는 함수(on)는 useEffect 안에 써도 가능
  }, []); //마운트되자마다 소켓 연결 위한 코드
  const hello = () => {
    socket.emit("hello", "hello"); //보낼 데이터는 두번째 인자(hello)
    socket.on("hello2", (res) => {
      console.log(res);
      setFromServerStr(res);
    });
  };
  const study = () => {
    socket.emit("study", "study");
    socket.on("study2", (res) => {
      console.log(res);
      setFromServerStr(res);
    });
  };
  const bye = () => {
    socket.emit("bye", "bye");
  };

  const [fromServerStr, setFromServerStr] = useState("");
  return (
    <>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}

// export default function Start() {
//   const initSocketConnect = () => {
//     console.log(socket.connected);
//     if (!socket.connected) socket.connect(); //클라이언트 소켓에 접속
//     // console.log("after connect", socket.connected);
//   };

//   useEffect(() => {
//     initSocketConnect();

//     socket.emit("test", "테스트");
//   }, []);
//   socket.on("test2", (msg) => {
//     console.log(msg);
//   });
//   return <p>소켓연결 테스트입니다.</p>;
// }

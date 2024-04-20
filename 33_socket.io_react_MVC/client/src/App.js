import Chatting1 from "./components/Chatting1";
import Chatting2 from "./components/Chatting2";
import Chatting3 from "./components/Chatting3";
import Practice1 from "./components/Practice1";
import Start from "./components/Start";
import "./styles/chat.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <h1>소켓 연결 </h1>
      {/* <Start /> */}
      {/* <Practice1 /> */}
      {/* <Chatting1 /> */}
      {/* <Chatting2 /> */}
      <Chatting3 />
    </div>
  );
}

export default App;

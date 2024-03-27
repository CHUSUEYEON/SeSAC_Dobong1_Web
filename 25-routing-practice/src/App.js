import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Student from "./pages/Student";
import Header from "./components/Header";
import "./style/style.scss";

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const header = styled(Header)`
  background-color: rgb(232, 212, 243);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

function App() {
  return (
    <div className="App">
      {/* <MyLink>안녕하세요</MyLink> */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/students/:name" element={<Student />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

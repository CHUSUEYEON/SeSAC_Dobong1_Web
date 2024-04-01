import Start from "./pages/Start";
import styled from "styled-components";
import Mbti from "./pages/Mbti";
import { useSelector } from "react-redux";
import GlobalStyle from "./components/GlobalStyle";
import Show from "./pages/Show";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  console.log(page);
  const survey = useSelector((state) => state.mbti.survey); //length = 4
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;

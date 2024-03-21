// import logo from "./logo.svg";
import "./App.css";
import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import ClassState2 from "./components/practice/ClassState2";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import PracticeState from "./components/practice/PracticeState";
import PororoObj from "./components/practice/PororoObj";
import PropsMap from "./components/PropsMap";
import Alphabet from "./components/Alphabet";

function App() {
  const dataArr = [
    {
      name: "peach",
      number: 5,
      price: 5000,
    },
    {
      name: "banana",
      number: 1,
      price: 3000,
    },
    {
      name: "apple",
      number: 10,
      price: 7000,
    },
    {
      name: "grape",
      number: 2,
      price: 8500,
    },
  ];
  return (
    <div className="App">
      {/* <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주"></ClassProps>
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치"></ClassProps>
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        // bgColor="black"
      ></ClassProps2>
      <FunctionProps name="사과" number={5} price={1000}></FunctionProps>
      <FunctionProps2 price={50000}></FunctionProps2>
      <FunctionProps2 price={10000} name="딸기"> */}
      {/* 여기가 children props라고 합니다. */}
      {/* <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>

      <h1>hello, state</h1>
      <ClassState></ClassState>
      <FunctionState></FunctionState>
      <ClassState2></ClassState2>

      <h1>연습 문제</h1>
      <PracticeState></PracticeState>
      <PororoObj></PororoObj> */}
      <h1>map과 filter 사용</h1>
      {/* <PropsMap arr={dataArr}></PropsMap> */}
      <Alphabet></Alphabet>
    </div>
  );
}

export default App;

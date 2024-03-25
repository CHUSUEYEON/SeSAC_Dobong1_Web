// import logo from './logo.svg';
import "./App.css";
import "./post.css";
import Container from "./components/Container";
import PostList from "./components/PostList";
// import LifeCycleClass from "./components/LifeCycleClass";
// import LifeCycleFunc from "./components/LifeCycleFunc";
import MyComponent from "./components/PracticeLifeCycle";
// import { RefClass1, RefClass2 } from "./components/RefClass";
// import { RefFunc1, RefFunc2 } from "./components/RefFunction";

function App() {
  return (
    <>
      {/* <h1>ref</h1> */}
      {/* <RefClass1></RefClass1>
      <RefClass2></RefClass2>
      <RefFunc1></RefFunc1>
      <RefFunc2></RefFunc2> */}

      {/* <h1>Life Cycle</h1> */}
      {/* <LifeCycleClass></LifeCycleClass>
      <LifeCycleFunc></LifeCycleFunc> */}

      {/* <h1>실습문제</h1> */}
      {/* <MyComponent></MyComponent> */}
      <Container>
        <PostList />
      </Container>
    </>
  );
}

export default App;

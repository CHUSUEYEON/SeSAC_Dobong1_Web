// import logo from './logo.svg';
import "./App.css";
import { FoodProps } from "./components/FoodProps";
import { FunctionProps } from "./components/FunctionProps";

function App() {
  return (
    <div>
      <h1>Delicious food~</h1>;
      <FoodProps food="마라떡볶이" style={{ color: "red" }}></FoodProps>
      <FunctionProps
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></FunctionProps>
    </div>
  );
}

export default App;

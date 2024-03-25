import "./App.css";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseReducer from "./components/useReducer";
import useTitle from "./hooks/useTitle";
import CustomHook from "./components/CustomHook";

function App() {
  useTitle("React hook!");
  return (
    <>
      <h1>react hook</h1>
      {/* <UseMemo />
      <UseMemoObj /> */}
      {/* <UseCallback />
      <UseCallback2></UseCallback2> */}
      <UseReducer />
      <CustomHook />
    </>
  );
}

export default App;

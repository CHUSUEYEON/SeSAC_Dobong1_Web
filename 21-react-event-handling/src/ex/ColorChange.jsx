import { useState } from "react";

function ColorChange() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  return (
    <div>
      <h3 style={{ color }}>{text}</h3>
      <button
        onClick={(e) => {
          setText("빨간색 글씨");
          setColor("red");
        }}
      >
        to Red
      </button>
      <button
        onClick={(e) => {
          setText("파란색 글씨");
          setColor("blue");
        }}
      >
        to Blue
      </button>
    </div>
  );
}

export default ColorChange;

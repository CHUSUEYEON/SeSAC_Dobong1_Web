import { useState } from "react";

function Disappear() {
  const [string, setShow] = useState(true);
  return (
    <div>
      <br />
      <button
        onClick={() => {
          setShow(!string);
        }}
      >
        {string ? "사라져라" : "보여라"}
      </button>
      <h2>{string ? "안녕하세요" : ""}</h2>
    </div>
  );
}

export default Disappear;

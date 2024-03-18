import { useState } from "react";

function HandlerEx() {
  const [state, setWord] = useState("Hello World!");

  return (
    <div>
      <h3>{state}</h3>
      <button
        onClick={(e) => {
          setWord("Goodbye Word!");
        }}
      >
        Change!
      </button>
    </div>
  );
}

export default HandlerEx;

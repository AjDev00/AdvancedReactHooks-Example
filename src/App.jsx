import "./App.css";
import ForwardRef from "./components/ForwardRef";
import Ref from "./components/Ref";
import { useRef, useEffect } from "react";

function App() {
  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);
  const submitRef = useRef(null);

  function firstKeyDown(e) {
    if (e.key === "Enter") {
      secondNameRef.current.focus();
    }
  }

  function secondKeyDown(e) {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  function submitKeyDown(e) {
    if (e.key === "Enter") {
      alert("Form Submitted!");
    }
  }
  return (
    <div className="App">
      <Ref />
      <ForwardRef
        firstNameRef={firstNameRef}
        secondNameRef={secondNameRef}
        submitRef={submitRef}
        firstKeyDown={firstKeyDown}
        secondKeyDown={secondKeyDown}
        submitKeyDown={submitKeyDown}
      />
    </div>
  );
}

export default App;

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

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <div className="App">
      <Ref />
      <div className="pt-10 justify-center items-center flex flex-col gap-6">
        <ForwardRef
          type="text"
          placeholder="Enter First Name"
          // className="border border-slate-400 shadow-md p-2 w-80"
          ref={firstNameRef}
          onKeyDown={firstKeyDown}
        />
        <ForwardRef
          type="text"
          placeholder="Enter Second Name"
          // className="border border-slate-400 shadow-md p-2 w-80"
          ref={secondNameRef}
          onKeyDown={secondKeyDown}
        />
        <button
          ref={submitRef}
          onKeyDown={submitKeyDown}
          //   onClick={handleSubmit}
          className="border border-green-400 text-white p-1.5 bg-green-400 rounded-md px-4"
        >
          Submit
        </button>
      </div>
      {/* <ForwardRef
        firstNameRef={firstNameRef}
        secondNameRef={secondNameRef}
        submitRef={submitRef}
        firstKeyDown={firstKeyDown}
        secondKeyDown={secondKeyDown}
        submitKeyDown={submitKeyDown}
      /> */}
    </div>
  );
}

export default App;

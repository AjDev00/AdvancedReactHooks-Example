import { useEffect } from "react";
import { useRef } from "react";

export default function Ref() {
  const firstNameRef = useRef(null);
  const secondNameRef = useRef(null);
  const submitRef = useRef(null);

  function firstKeyDown(e) {
    if (e.key === "Enter") {
      secondNameRef.current.focus();
    }
  }

  function secondKeyDown() {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  function submitKeyDown() {
    if (e.key === "Enter") {
      alert("Form Submitted!");
    }
  }

  //   function handleSubmit() {
  //     alert("form!!!");
  //   }

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <div>
      <div className="pt-10 justify-center items-center flex flex-col gap-6">
        <input
          type="text"
          placeholder="Enter First Name"
          className="border border-slate-400 shadow-md p-2 w-80"
          ref={firstNameRef}
          onKeyDown={firstKeyDown}
        />
        <input
          type="text"
          placeholder="Enter Second Name"
          className="border border-slate-400 shadow-md p-2 w-80"
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
    </div>
  );
}

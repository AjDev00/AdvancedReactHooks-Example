import { useReducer } from "react";

export default function Reducer() {
  //initialState of the counter.
  const initialState = 0;

  //the reducer function.
  function reducer(state, action) {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        //decrement if state value can be deducted by one, if not return the initialState value.
        return state ? state - 1 : initialState;

      case "reset":
        return initialState;

      default:
        return state;
    }
  }

  //useReducer takes two parameters; reducer function and initialState.
  //the count is the variable holding the value of the counter and the dispatch is a function we use to access certain function in the reducer function.
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="pt-20">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold underline">useReducer</h3>
          <div>Count = {count}</div>
        </div>
        <br />
        <div className="flex flex-row gap-4 justify-center items-center">
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-green-400 text-white"
            onClick={() => dispatch("increment")}
          >
            Increment
          </button>
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-green-400 text-white"
            onClick={() => dispatch("decrement")}
          >
            Decrement
          </button>
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-red-400 text-white"
            onClick={() => dispatch("reset")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

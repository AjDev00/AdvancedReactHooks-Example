//complex counter with useReducer.
import { useReducer } from "react";

export default function ComplexReducer() {
  //initialState is an object that holds the firstCounter variable of the counter.
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };

  //the reducer function. the type is the type of operation that wants to be performed.
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + 1 };

      case "decrement":
        //decrement if firstCounter value can be deducted by one, if not return the initialState value.
        return {
          ...state,
          firstCounter: state.firstCounter
            ? state.firstCounter - 1
            : state.firstCounter,
        };

      case "increment2":
        return { ...state, secondCounter: state.secondCounter + action.value };

      case "decrement2":
        //decrement if firstCounter value can be deducted by one, if not return the initialState value.
        return {
          ...state,
          secondCounter: state.secondCounter
            ? state.secondCounter - action.value
            : state.secondCounter,
        };

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
          <h3 className="font-semibold underline">Complex useReducer</h3>
          <div>First Counter = {count.firstCounter}</div>
          <div>Second Counter = {count.secondCounter}</div>
        </div>
        <br />

        {/* //first counter. */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-green-400 text-white"
            onClick={() => dispatch({ type: "increment" })}
          >
            Increment First Counter
          </button>
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-green-400 text-white"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Decrement First Counter
          </button>
        </div>
        <br />

        {/* //second counter. */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-green-400 text-white"
            onClick={() => dispatch({ type: "increment2", value: 5 })}
          >
            Increment Second Counter
          </button>
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-green-400 text-white"
            onClick={() => dispatch({ type: "decrement2", value: 5 })}
          >
            Decrement Second Counter
          </button>
        </div>
        <br />

        <div className="flex flex-col justify-center items-center">
          <button
            className="border border-transparent shadow-md p-2 rounded-md bg-red-400 text-white"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

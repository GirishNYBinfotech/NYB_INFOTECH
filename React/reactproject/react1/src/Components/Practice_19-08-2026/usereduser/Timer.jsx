import { useEffect, useReducer } from "react";

const initialState = {
  seconds: 0,
  isRunning: false
};

function reducer(state, action) {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isRunning: true
      };

    case "STOP":
      return {
        ...state,
        isRunning: false
      };

    case "RESET":
      return {
        seconds: 0,
        isRunning: false
      };
      case "TICK":
      return {
        ...state,
        seconds: state.seconds + 1
      };
    default:
      return state;
  }
}

function Timer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval;
    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" })
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [state.isRunning])

  return (
    <div>
      <h1>{state.seconds} seconds</h1>
      <button onClick={() => dispatch({ type: "START" })}>Start</button>
      <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Timer
import "./App.css";

// HOOKS
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { add, minuns, portion, hit } from "./features/add/addSlice";

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  const count = useSelector((state) => {
    return state.add.result;
  });
  const dispatch = useDispatch();

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(add({ frist: firstNumberInput, last: secondNumberInput }));
  }

  function handleSubClick() {
    dispatch(
      minuns({
        first: firstNumberInput,
        last: secondNumberInput,
      }),
    );
  }

  function handleMultClick() {
    dispatch(
      hit({
        first: firstNumberInput,
        last: secondNumberInput,
      }),
    );
  }

  function handleDivClick() {
    dispatch(
      portion({
        first: firstNumberInput,
        last: secondNumberInput,
      }),
    );
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#0f766e",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label style={{ color: "black", fontWeight: "bold" }}>
          First Number
        </label>
        <input
          type="number"
          onChange={(e) => setFirstNumberInput(e.target.value)}
          style={{ padding: "5px", width: "200px" }}
        />

        <label style={{ color: "black", fontWeight: "bold" }}>
          Second Number
        </label>
        <input
          type="number"
          onChange={(e) => setSecondNumberInput(e.target.value)}
          style={{ padding: "5px", width: "200px" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginTop: "10px",
            width: "100px",
          }}
        >
          <button onClick={handleSumClick}>sum</button>
          <button onClick={handleSubClick}>subtract</button>
          <button onClick={handleMultClick}>multiply</button>
          <button onClick={handleDivClick}>divide</button>
        </div>


        <h2 style={{ color: "white", marginTop: "15px" }}>
          Result Redux: {count}
        </h2>
      </div>
    </div>
  );
}

export default App;

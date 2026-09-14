import "./App.css";
import { useState } from "react";

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);
  const [result, setResult] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    const res = Number(firstNumberInput) + Number(secondNumberInput);
    setResult(res);
  }

  function handleSubClick() {
    const res = Number(firstNumberInput) - Number(secondNumberInput);
    setResult(res);
  }

  function handleMultClick() {
    const res = Number(firstNumberInput) * Number(secondNumberInput);
    setResult(res);
  }

  function handleDivClick() {
    const res = Number(firstNumberInput) / Number(secondNumberInput);
    setResult(res);
  }

  return (
    <div className="App" style={{ backgroundColor: "#0f766e", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <label style={{ color: "black", fontWeight: "bold" }}>First Number</label>
        <input 
          type="number" 
          onChange={(e) => setFirstNumberInput(e.target.value)} 
          style={{ padding: "5px", width: "200px" }}
        />

        <label style={{ color: "black", fontWeight: "bold" }}>Second Number</label>
        <input 
          type="number" 
          onChange={(e) => setSecondNumberInput(e.target.value)} 
          style={{ padding: "5px", width: "200px" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px", width: "100px" }}>
          <button onClick={handleSumClick}>sum</button>
          <button onClick={handleSubClick}>subtract</button>
          <button onClick={handleMultClick}>multiply</button>
          <button onClick={handleDivClick}>divide</button>
        </div>

        {result !== null && (
          <h2 style={{ color: "white", marginTop: "15px" }}>Result: {result}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
import { useState } from "react";

// let nam1 = "Mohamed";

export default function UseState() {
  const [Name, setName] = useState("Mohamed");

  function clicked() {
    if (Name == "Mohamed") {
      setName("Ahmed");
    } else {
      setName("Mohamed");
    }
  }
  return (
    <>
      <button className="btn" onClick={clicked}>
        ClickeBuuton
      </button>
      <h1>{Name}</h1>
    </>
  );
}

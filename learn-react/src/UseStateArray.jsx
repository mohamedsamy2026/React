import { useState } from "react";

export default function StateArray() {

  const [inputValue, setInputValue] = useState("");

  const [mobile, setMobile] = useState(["Ipone", "Oppo", "Vivo"]);

  function inputFunction(event) {
    setInputValue(event.target.value);
  }

  function mobileFunction() {
    setMobile([...mobile,inputValue]);
  }

  const mobilesList = mobile.map((mobil, index) => {
    return <li key={index} >{mobil}</li>;
  });
  return (
    <>
      <ul>{mobilesList}</ul>

      <input onChange={inputFunction} value={inputValue} type="text" />

      <button value={mobile} onClick={mobileFunction}>Add</button>
    </>
  );
}

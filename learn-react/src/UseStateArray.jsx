import { useState } from "react";

let next = 4;

export default function StateArray() {
  const [inputValue, setInputValue] = useState("");

  const [mobile, setMobile] = useState([
    { id: 1, type: "Ipone" },
    { id: 2, type: "Oppo" },
    { id: 3, type: "Vivo" },
  ]);

  function inputFunction(event) {
    setInputValue(event.target.value);
  }

  function mobileFunction() {
    setMobile([...mobile, { id: next, type: inputValue }]);
    next++;
  }

  const mobilesList = mobile.map((mobil) => {
    return (
      <li key={mobil.id}>
        {mobil.type}
        <button
          onClick={() => {
            deleteItem(mobil.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            editItem(mobil.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });

  function deleteItem(id) {
    const newData = mobile.filter((device) => {
      return device.id != id;
    });
    setMobile(newData);
  }

  function editItem(id) {
    let newData = mobile.map((device) => {
      if (device.id == id) {
        return { ...device, type: device.type + " Edit" };
      } else {
        return device;
      }
    });
    setMobile(newData);
  }

  return (
    <>
      <ul>{mobilesList}</ul>

      <input onChange={inputFunction} value={inputValue} type="text" />

      <button value={mobile.type} onClick={mobileFunction}>
        Add
      </button>
    </>
  );
}

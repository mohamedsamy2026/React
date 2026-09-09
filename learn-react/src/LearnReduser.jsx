import { useReducer, useState } from "react";

function Reduser(resultState, action) {
  const type = action.type;

  if (type == "sum") {
    const { firstNumbe, lastNumbe } = action.payload;

    return Number(firstNumbe) + Number(lastNumbe);
  }
}

export default function UseReduser() {
  const [firstNumber, setfirstNumber] = useState("");
  const [lastNumber, setlastNumber] = useState("");
  const [result, setresult] = useState(0);

  //   USeReduser
  const [result2, dispatch] = useReducer(Reduser, 0);

  function sum() {
    dispatch({
      type: "sum",
      payload: {
        firstNumbe: firstNumber,
        lastNumbe: lastNumber,
      },
    });
  }

  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center flex-col text-white">
      <input
        value={firstNumber}
        onChange={(event) => {
          setfirstNumber(event.target.value);
        }}
        type="text"
        className="bg-green-600 py-2 mb-8 px-5 rounded-lg text-2xl"
      />

      <input
        value={lastNumber}
        onChange={(event) => {
          setlastNumber(event.target.value);
        }}
        type="text"
        className="bg-green-600 py-2 mb-8 px-5 rounded-lg text-2xl"
      />

      <button
        onClick={sum}
        className="py-2 px-5 text-2xl bg-white text-blue-600 border-0 rounded-lg cursor-pointer"
      >
        Sum
      </button>

      <h1 className=" my-10 text-2xl bg-blue-400 px-8 py-2 rounded-lg">
        {result2}
      </h1>
      <h1 className="text-2xl bg-blue-400 px-8 py-2 rounded-lg">{result}</h1>
    </div>
  );
}

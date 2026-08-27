import { useContext } from "react";
import { FormInputsContext } from "./context/Inputscontext";

export default function FromInput() {
  const myContentText = useContext(FormInputsContext);

  return (
    <>
      <label>{myContentText.label}</label>
      <input
        type={myContentText.type}
        value={myContentText.value}
        onChange={(event) => {
          myContentText.handleChange(event.target.value);
        }}
      />
    </>
  );
}

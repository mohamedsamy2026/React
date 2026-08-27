import { useContext } from "react";
import { FormInputsContext } from "./context/Inputscontext";

import { usersContext } from "./context/UsersContext";

export default function FromInput() {
  const users = useContext(usersContext)
  const myContentText = useContext(FormInputsContext);

  return (
    <>
      <label>{users.name} {myContentText.label}</label>
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

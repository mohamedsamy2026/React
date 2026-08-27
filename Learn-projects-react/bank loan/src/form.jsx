import { useState } from "react";
import InputVailed from "./formInput";
import Error from "./ErrorMessage";
import "./form.css";

import { useContext } from "react";
import { usersContext } from "./context/UsersContext";
import { FormInputsContext } from "./context/Inputscontext";

export default function RequestInput() {
  const myUsers = useContext(usersContext);
  const [inputs, setInputs] = useState({
    name: myUsers.name,
    phone: "",
    age: "",
    employes: false,
    salary: "Less Than 500$",
  });

  let isTrue =
    inputs.name !== "" &&
    inputs.age >= 17 &&
    inputs.age < 80 &&
    inputs.phone.length == 11
      ? "blueviolet"
      : "gray";

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    if (inputs.name == "") {
      setErrorMessage("Please Enter The Name");
      setShowError(true);
      return;
    } else if (inputs.phone.length < 11 || inputs.phone.length > 11) {
      setErrorMessage("Please Enter a Valid Phone Number (Must be 11 digits)");
      setShowError(true);
      return;
    } else if (inputs.age < 17 || inputs.age > 80) {
      setErrorMessage("Please Enter a Valid Age Range!");
      setShowError(true);
      return;
    }

    setErrorMessage("Form Submitted Successfully");
    setShowError(true);
  }

  function OnChangeName(value) {
    setInputs({ ...inputs, name: value });
  }
  function OnChangePhone(value) {
    setInputs({ ...inputs, phone: value });
  }
  function OnChangeAge(value) {
    setInputs({ ...inputs, age: value });
  }

  return (
    <>
      <form onSubmit={submit}>
        <FormInputsContext.Provider
          value={{
            label: "Name",
            type: "text",
            value: inputs.name,
            handleChange: OnChangeName,
          }}
        >
          <InputVailed />
        </FormInputsContext.Provider>

        <FormInputsContext.Provider
          value={{
            label: "Phone",
            type: "number",
            value: inputs.phone,
            handleChange: OnChangePhone,
          }}
        >
          <InputVailed />
        </FormInputsContext.Provider>

        <FormInputsContext.Provider
          value={{
            label: "Age",
            type: "number",
            value: inputs.age,
            handleChange: OnChangeAge,
          }}
        >
          <InputVailed />
        </FormInputsContext.Provider>

        <div>
          <label>Are You An Employee?</label>
          <input
            checked={inputs.employes}
            type="checkbox"
            onChange={(event) =>
              setInputs({ ...inputs, employes: event.target.checked })
            }
            className="big-checkbox"
          />
        </div>

        <div>
          <label>Salary</label>
          <select
            value={inputs.salary}
            onChange={(event) =>
              setInputs({ ...inputs, salary: event.target.value })
            }
          >
            <option>Less Than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>abave2000$</option>
          </select>
        </div>
        {showError ? (
          <Error
            onClose={() => {
              setShowError(false);
            }}
            error={errorMessage}
          />
        ) : null}
        <button style={{ background: isTrue }}>Submit</button>
      </form>
    </>
  );
}

import { useState } from "react";
import InputVailed from "./formInput";
import "./form.css";

export default function RequestInput() {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employes: false,
    salary: "Less Than 500$",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputVailed
        label="Name:"
        type="text"
        value={inputs.name}
        onChange={(event) => setInputs({ ...inputs, name: event.target.value })}
        required={true}
      />

      <InputVailed
        label="Phone:"
        type="number"
        value={inputs.phone}
        onChange={(event) =>
          setInputs({ ...inputs, phone: event.target.value })
        }
        required={true}
      />

      <InputVailed
        label="Age:"
        type="text"
        value={inputs.age}
        onChange={(event) => setInputs({ ...inputs, age: event.target.value })}
        required={true}
      />

      <div>
        <label>Are You An Employee?</label>
        <input
          checked={inputs.employes}
          type="checkbox"
          onChange={(event) =>
            setInputs({ ...inputs, employes: event.target.checked })
          }
          required
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

      <button>Submit</button>
    </form>
  );
}

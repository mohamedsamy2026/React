import { useState } from "react";

export default function UseState() {
  const [formInputs, setformInputs] = useState({
    Name: "",
    email: "",
    age: "",
    message: "",
    checked: false,
  });

  function message(event) {
    setformInputs({ ...formInputs, message: event.target.value });
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formInputs.Name, formInputs.email, formInputs.age);
        }}
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Please Enter The Name"
            value={formInputs.Name}
            onChange={(event) => {
              setformInputs({ ...formInputs, Name: event.target.value });
            }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Please Enter The Email"
            value={formInputs.email}
            onChange={(event) => {
              setformInputs({ ...formInputs, email: event.target.value });
            }}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="text"
            placeholder="Please Enter The Age"
            value={formInputs.age}
            onChange={(event) => {
              setformInputs({ ...formInputs, age: event.target.value });
            }}
          />
        </div>

        <div>
          <textarea
            rows="10"
            cols="40"
            placeholder="Enter The Message"
            value={formInputs.message}
            onChange={message}
          ></textarea>
        </div>

        <div className="div">
          <input
            type="checkbox"
            className="check"
            checked={formInputs.checked}
            onChange={(event) => {
              setformInputs({...formInputs,checked:event.target.checked})
            }}
          />
          <h4>هل انت فوق السن 17</h4>
        </div>

        <button className="btn">Submit</button>
      </form>
    </>
  );
}

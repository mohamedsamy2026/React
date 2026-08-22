import { useState } from "react";

export default function UseState() {
  const [formInputs, setformInputs] = useState({ Name: "", email: "", age:"" });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formInputs.Name,formInputs.email,formInputs.age)
        }}
      >

        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Please Enter The Name"
            value={formInputs.Name}
            onChange={(event) => {
              setformInputs({...formInputs,Name:event.target.value});
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
              setformInputs({...formInputs,email:event.target.value});
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
              setformInputs({...formInputs,age:event.target.value});
            }}
          />
        </div>

        <button className="btn">Submit</button>
      </form>
    </>
  );
}

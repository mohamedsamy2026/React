import { useContext } from "react";
import { usersContext } from "./context/UsersContext";

export default function () {
  const myUsers = useContext(usersContext);

  return (
    <>
      <h1 style={{marginBottom:"50px"}}><span style={{color:"orange"}}>Hello</span> {myUsers.name}</h1>
      <h1 className="title">Requesting a Loan</h1>
      <hr />
    </>
  );
}

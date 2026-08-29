import { Outlet } from "react-router-dom";

export default function posts() {
  return (
    <>
      <h1 style={{ color: "orange",textAlign:"center", width: "80%", backgroundColor: "green" ,margin:"20px auto", }}>
        Post Start
      </h1>
      <div>
        <Outlet />
      </div>
      <h1 style={{ color: "orange",textAlign:"center", width: "80%", backgroundColor: "green", margin:"20px auto", }}>
        Post End
      </h1>
    </>
  );
}

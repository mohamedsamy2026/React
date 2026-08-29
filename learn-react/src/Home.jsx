import { Link } from "react-router-dom";

export default function home() {
  return (
    <>
      <h1>This Is The Home Page</h1>
      <Link to="/home">
        <div style={{background:"orange",textAlign:"center", padding:"20px"}}>
          <h2 style={{ color: "black" }}>Got To The Defult Page</h2>
        </div>
      </Link>
    </>
  );
}

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>The Page (404)</h1>
      <h2 style={{ color: "black", textAlign: "center" }}>
        The Page Is NotFound
      </h2>
      <Link to="/home">
        <button style={{ textAlign: "center" }}>Return The Home Page</button>
      </Link>
    </>
  );
}

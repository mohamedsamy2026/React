import "./error.css";

export default function ErrorMessage({ onClose, error }) {
  const isSucess = error.includes("Successfully");
  return (
    <div className="overlay" onClick={onClose}>
      <h2 style={{ color: isSucess ? "green" : "red" }}>{error}</h2>
    </div>
  );
}

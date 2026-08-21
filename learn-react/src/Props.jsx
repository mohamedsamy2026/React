export default function Props({ name, email, age, children = "No Content" }) {
  return (
    <div>
      {
      name == "" || name == null ? null : 
      <>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              padding: "10px",
              margin: "20px",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{age}</h3>
            <hr />
            <p>{children}</p>
          </div>
      </>
      }
    </div>
  );
}

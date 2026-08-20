export default function Post({ num, name = "", content }) {
  return (
    <>
      <div
        style={{
          margin: "30px",
          border: "3px solid teal",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h2>{num}</h2>
        <h2
          style={{
            margin: "13px 0",
          }}
        >
          {name}
        </h2>
        <hr />
        <h3
          style={{
            margin: "14px 0",
          }}
        >
          {content}
        </h3>
      </div>
    </>
  );
}

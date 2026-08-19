import "./App.css";
import Myheader from "./myheader";
import Post from "./post";
import Side from "./side";

function App() {
  return (
    <div className="App">
      <Myheader />

      <div
        style={{
          display: "flex",
          justifyContent:"center"
        }}
      >
        <div style={{ width: "70%" }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div style={{ border: "3px solid teal", margin:"30px",display:"grid", gridTemplateColumns: "repeat(2,1fr)"}}>
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;

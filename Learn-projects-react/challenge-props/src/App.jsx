import "./App.css";
import Myheader from "./Myheader";
import Post from "./Post";
import Side from "./Side";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <Myheader />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <div style={{ width: "50%" }}>
          <Post
            num="20"
            name="اكاديميه ترميز"
            content="Lorem ipsum dolor sit amet. 1"
          />
          <Post num="Hello World" content="Lorem ipsum dolor sit amet. 2" />
          <Post num="Post 3" content="Lorem ipsum dolor sit amet. 3" />
        </div>

        <div
          style={{
            marginTop: "30px",
            border: "3px solid teal",
            padding: "20px",
            width: "30%",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Side>
            <h3>1 ✨✨</h3>
          </Side>

          <Side>
            <h3 style={{ textAlign: "center", marginBottom: "2px"}}>2</h3>
            <img src="../public/favicon.svg" alt="" />
          </Side>

          <Side>
            <h3 style={{ textAlign: "center", marginBottom: "2px"}}>3</h3>
            <h3>✨✨✨</h3>
            <img  src={reactLogo} alt="" />
          </Side>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
// import LearnCourseReact from "./LearnCourseReact"
import Props from "./Props";
import UseState from "./UseStaute";
import UseStateArray from "./UseStateArray"

// const show = true;

function App() {
  const [count, setCount] = useState(0);

  let myTask = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Start" },
    { id: 4, title: "End" },
  ];

  let taskList = myTask.map((task) => {
    return (
      <li
        style={{ background: "blue", margin: "10px 0", color: "white"}}
        key={task.id}>

        {task.title}
      </li>
    );
  });


  function countPlus(){
      setCount(count + 1)
      setCount((count) => {
          return count + 1
      })
  }

  return (
    <>
       <h1>The Count IS [{count}]</h1> 
       <div className="btn" onClick={countPlus}>
       <button>Click Button</button>
       </div>

      {/* <PropsDefult /> */}

      {/* <ul>{taskList}</ul> */}

      {/* <UseState/> */}

      {/* <UseStateArray/> */}

    
    </>
  );
}

function PropsDefult() {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Props name="Mohamed" email="mohameeng747@gmail.com" age="17" content="1">
        <h2
          style={{
            color: "white",
            backgroundColor: "green",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          Heelo World 1
        </h2>
      </Props>

      <Props name="Ahmed" email="ahmedeng888@gmail.com" age="16" content="2">
        <h2
          style={{
            color: "white",
            backgroundColor: "orange",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          Heelo World 2
        </h2>
      </Props>

      <Props name="rodina" email="rodinaeng123@gmail.com" age="10" content="3">
        <h2
          style={{
            color: "white",
            backgroundColor: "blue",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          Heelo World 3
        </h2>
      </Props>
    </div>
  );
}

export default App;

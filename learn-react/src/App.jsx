import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
// import LearnCourseReact from "./LearnCourseReact"
import Props from "./Props";
import UseState from "./UseStaute";

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

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* <PropsDefult /> */}

      {/* <ul>{taskList}</ul> */}

      {/* <UseState/> */}

      <div className="ticks"></div>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
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

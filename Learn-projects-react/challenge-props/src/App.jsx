import { Children } from "react";
import "./App.css";
import Myheader from "./Myheader";
import Post from "./Post";
import Side from "./Side";
import reactLogo from "./assets/react.svg";

function App() {

  // Data Posts Start
  const dataPosts = [
    {
      id: 1,
      num: "10",
      name: "اكاديميه ترميز 1",
      content: "Lorem ipsum dolor sit amet. 1",
    },
    {
      id: 2,
      num: "20",
      name: "اكاديميه ترميز 2",
      content: "Lorem ipsum dolor sit amet. 2",
    },
    {
      id: 3,
      num: "30",
      name: "اكاديميه ترميز 3",
      content: "Lorem ipsum dolor sit amet. 3",
    },
  ];

  let dataOrders = dataPosts.map((order) => {
    return (
      <Post
        key={order.id}
        num={order.num}
        name={order.name}
        content={order.content}
      />
    );
  });
  // Data Posts Start

  

  // Data Aside start
  const dataAside = [
    {
      id: 1,
      content: "1 ✨",
    },
    {
      id: 2,
      content: "2 ✨ ✨",
      img: "../public/favicon.svg",
    },
    {
      id: 3,
      content: "3 ✨✨✨",
      img: reactLogo,
    },
  ];

  let dataAsideOrrders = dataAside.map((side) => {
    return (
      <Side
        key={side.id}
        content={side.content}
        >
          <img src={side.img}/>

        </Side>
    );
  });
  // Data Aside End

  return (
    <>
      <Myheader />

      <div className="AppAside">
        <div style={{ width: "50%" }}>{dataOrders}</div>

        <div className="Side">{dataAsideOrrders}</div>

      </div>
    </>
  );
}

export default App;

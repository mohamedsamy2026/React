import "./LearnCourseReact.css"

export default function LearnCourseReact() {
  let x = 10;

  let parson = {
    name: "Mohamed",
    age: 17,
    email: "mohamedeng747@gmail.com",
  };

  let style = {
    backgroundColor: "green",
    color:"white",
    fontWeight: "bold",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor:"pointer",
    border:"none"
  }
  return (
    <div>
      <h2>
        Hello {parson.name}
      </h2>
      <h3 style={style}>e {x}
        MY Age {parson.age} Learn React JS expertis Years
      </h3>

      
      <h2>From Tarmez</h2>

      <button className={parson.age >= 17 ?"active" : "noactive"}>Check Name</button>

      <button style={style}  onClick={Say}>Click Aleart</button>
    </div>
  );
}

function Say() {
  return alert("React JS");
}

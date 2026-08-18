export default function LearnCourseReact() {
  let x = 10;

  let parson = {
    name: "Mohamed",
    age: 17,
    email: "mohamedeng747@gmail.com",
  };
  return (
    <div>
      <h2>
        {Say()} {parson.name}
      </h2>
      <h3>
        MY Age {parson.age} Learn React JS expertise {x} Years
      </h3>

      <h2>From Tarmez</h2>
    </div>
  );
}

function Say() {
  return "Hello ";
}

import "./App.css";
import ToDoList from "./Components/To-do-list";
import AleartSucess from "./Components/AleartSucess";

// Hooks
import { checkContext } from "./Context/context";
import { useState } from "react";
import { SuccessContext } from "./Context/AleartSuccessContext";

const todos = [];

function App() {
  const [list, setList] = useState(todos);
  const [open, setOpen] = useState({ isopen: false, message: "" });

  function hideAleartSuccess(message) {
    setOpen({ ...open, isopen: true, message: message });
    setTimeout(() => {
      setOpen((prev) => ({ ...prev, isopen: false }));
    }, 2000);
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <SuccessContext.Provider value={{ hideAleartSuccess }}>
        <AleartSucess open={open.isopen} message={open.message} />
        <checkContext.Provider value={{ list, setList }}>
          <ToDoList />
        </checkContext.Provider>
      </SuccessContext.Provider>
    </div>
  );
}

export default App;

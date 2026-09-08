import "./App.css";
import ToDoList from "./Components/To-do-list";

// Hooks
import { checkContext } from "./Context/context";
import { useState } from "react";
import { ALeartProvider } from "./Context/AleartSuccessContext";

const todos = [];

function App() {
  const [list, setList] = useState(todos);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <ALeartProvider>
        
        <checkContext.Provider value={{ list, setList }}>
          <ToDoList />
        </checkContext.Provider>
        
      </ALeartProvider>
    </div>
  );
}

export default App;

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// Components
import Header from "./Header";
import List from "./List";
import AleartSucess from "./AleartSucess";
import UpdateList from "./UpdateList";
import AleartDelete from "./AleartDelete";

const todos = [];

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(todos);

  function handleCompleted(id) {
    const updatecompleted = list.map((t) => {
      if (id === t.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setList(updatecompleted);
  }

  let ListRead = list.map((oneList) => {
    return (
      <List key={oneList.id} todo={oneList} handleCompleted={handleCompleted} />
    );
  });

  // Create Todo
  function createTodo() {
    const newTodo = {
      id: uuidv4(),
      title: inputValue,
      details: "",
      completed: false,
    };
    setList([...list, newTodo]);
    setInputValue("");
  }

  return (
    <div className="bg-white  w-[40%] h-auto py-5 px-6 rounded-[10px] text-center">
      <Header />

      {ListRead}

      {/* Create Todo Start */}
      <div className="w-full h-full flex justify-center items-center">
        <button
          onClick={createTodo}
          className="deleteIcon py-[14px] bg-[#88173d]  rounded-sm text-xl font-bold text-white w-[25%] cursor-pointer hover:bg-[#5f0c28] duration-300"
        >
          إضافه
        </button>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="w-[75%] border-[1.8px] border-gray-400 py-[14px] px-2 ms-2 rounded-sm outline-0 font-bold text-lg hover:border-gray-600 duration-300"
          type="text"
          placeholder="عنوان المهمه"
        />
      </div>
      {/* Create Todo End */}

      <AleartSucess />

      <UpdateList />

      <AleartDelete />
    </div>
  );
}

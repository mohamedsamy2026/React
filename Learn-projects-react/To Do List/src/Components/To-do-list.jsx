import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import { checkContext } from "../Context/context";

// Components
import List from "./List";
import AleartSucess from "./AleartSucess";

export default function ToDoList() {
  const { list, setList } = useContext(checkContext);
  const [inputValue, setInputValue] = useState("");
  const [dispayType, setDisplayType] = useState("all");

  let filteredTodos =
    list.filter((t) => {
      if (dispayType === "completed") {
        return t.completed;
      } else if (dispayType === "non-completed") {
        return !t.completed;
      } else {
        return true;
      }
    }) || [];

  let ListRead = filteredTodos.map((oneList) => {
    return <List key={oneList.id} todo={oneList} />;
  });

  // useEffect
  useEffect(() => {
    const todosStorge = JSON.parse(localStorage.getItem("todos"));
    if (todosStorge) {
      setList(todosStorge);
    }
  }, []);

  // Create Todo
  function createTodo() {
    if (inputValue == "") {
      alert("من فضلك ادخل مهمه");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: inputValue,
      details: "",
      completed: false,
    };

    const updatedTodo = [...list, newTodo];
    setList(updatedTodo);
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setInputValue("");
  }

  return (
    <div className="bg-white  w-[40%] h-auto py-5 px-6 rounded-[10px] text-center max-h-[80vh] overflow-auto">
      <div>
        <h1 className="font-black text-7xl font-header border-b-1 border-gray-400">
          مهامي
        </h1>

        <div
          className="flex justify-between items-center my-8 font-bold text-[20px] border-1 border-gray-500 cursor-pointer w-fit mx-auto overflow-hidden rounded-sm"
          dir="rtl"
        >
          <button
            onClick={() => setDisplayType("all")}
            className={`p-3 cursor-pointer duration-300 ${
              dispayType === "all"
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            الكل
          </button>

          <button
            onClick={() => setDisplayType("completed")}
            className={`p-3 cursor-pointer duration-300 border-x-1 border-gray-500 ${
              dispayType === "completed"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            منجز
          </button>

          <button
            onClick={() => setDisplayType("non-completed")}
            className={`p-3 cursor-pointer duration-300 ${
              dispayType === "non-completed"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            غير منجز
          </button>
        </div>
      </div>

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
    </div>
  );
}

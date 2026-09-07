import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect, useMemo } from "react";
import { checkContext } from "../Context/context";

// Components
import List from "./todo";
import AleartSucess from "./AleartSucess";

export default function ToDoList() {
  const { list, setList } = useContext(checkContext);
  const [inputValue, setInputValue] = useState("");
  const [dispayType, setDisplayType] = useState("all");
  const [deleteModule, setdeleteModule] = useState(false);
  const [dilogTodo, setdilogTodo] = useState(null);

  let filteredTodos = useMemo(() => {
    console.log("Completed And Not Completded");
    return (
      list.filter((t) => {
        if (dispayType === "completed") {
          return t.completed;
        } else if (dispayType === "non-completed") {
          return !t.completed;
        } else {
          return true;
        }
      }) || []
    );
  }, [list, dispayType]);

  let ListRead = filteredTodos.map((oneList) => {
    return <List key={oneList.id} todo={oneList} showDelete={showDelete} />;
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

  // Functions Deleting Todo

  function showDelete(todo) {
    setdilogTodo(todo);
    setdeleteModule(true);
  }

  function NotdelelteTodo() {
    setdeleteModule(false);
  }

  function handleDeleteConfirm() {
    const deleteTodo = list.filter((d) => {
      return d.id !== dilogTodo.id;
    });
    setList(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
    setdeleteModule(false);
  }

  // Functions Deleting Todo End

  return (
    <>
      {/*  Aleart DeleteConfirm Start */}
      <div
        className={`w-screen h-screen bg-[#000000a0] absolute inset-0 ${deleteModule ? "block" : "hidden"} duration-300`}
      >
        <div
          className="absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] bg-white w-[35%]
        h-auto rounded-sm"
        >
          <h2 className="font-header font-extrabold text-2xl text-right text-gray-800 pe-6 py-4">
            هل أنت متأكد من رغبتك في حذف المهمه
          </h2>
          <p className="font-bold text-[19px] text-gray-600 text-right pe-6">
            لا يمكنك التراجع عن الحذف في حال اختيار زر: (حذف)
          </p>
          <div className="space-x-4 text-white font-extrabold text-lg mt-10 mb-8 w-full text-left ps-6">
            <button
              onClick={handleDeleteConfirm}
              className="cursor-pointer bg-red-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-red-800"
            >
              نعم قم بالحذف
            </button>
            <button
              onClick={NotdelelteTodo}
              className="cursor-pointer bg-green-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-green-800"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
      {/*  Aleart DeleteConfirm End */}

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
    </>
  );
}

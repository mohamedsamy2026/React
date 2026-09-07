// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

// Hooks
import { useContext } from "react";
import { checkContext } from "../Context/context";
import { useState } from "react";

export default function List({ todo ,showDelete }) {
  const { list, setList } = useContext(checkContext);

  const [updateModule, setupdateModule] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

  function handleComplete() {
    const updatecompleted = list.map((t) => {
      if (t.id === todo.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setList(updatecompleted);
    localStorage.setItem("todos", JSON.stringify(updatecompleted));
  }

  // Functions Start

  // Functions Deleting Todo Start
  function delelteTodo() {
    showDelete(todo.id)
  }


  // Functions Deleting Todo End

  // Functions Update Todo Start

  function updateTodo1() {
    setupdateModule(true);
  }

  function NoUpdate1() {
    setupdateModule(false);
  }

  function confirmUpdate() {
    const updatetodoonely = list.map((t) => {
      if (t.id == todo.id) {
        return { ...t, title: updateTodo.title, details: updateTodo.details };
      }
      return t;
    });

    setList(updatetodoonely);
    setupdateModule(false);
    localStorage.setItem("todos", JSON.stringify(updatetodoonely));
  }

  // Functions Update Todo End

  // Functions End

  return (
    <>
      {/* Icons Start */}
      <div className="flex justify-between items-center bg-blue-950 text-white hover:h-37 duration-200 px-4 h-28 rounded-[5px] cursor-pointer mb-10 hover:shadow-xl hover:shadow-black/40">
        <div className="space-x-7 flex items-center">
          {/* زرار الحذف */}
          <button
            onClick={delelteTodo}
            className="bg-white border-2 border-red-500 p-1 rounded-full cursor-pointer hover:bg-red-600 transition-colors group"
          >
            <DeleteIcon
              className="text-red-500 group-hover:text-white"
              style={{ fontSize: "35px" }}
            />
          </button>

          {/* زرار التعديل */}
          <button
            onClick={updateTodo1}
            className="bg-white border-2 border-blue-500 p-1 rounded-full cursor-pointer hover:bg-blue-600 transition-colors group"
          >
            <EditIcon
              className="text-blue-500 group-hover:text-white"
              style={{ fontSize: "35px" }}
            />
          </button>

          {/* زرار التأكيد */}
          <button
            onClick={handleComplete}
            className={` border-2  p-1 rounded-full cursor-pointer hover:border-white hover:bg-green-600 transition-colors group ${todo.completed ? "bg-green-500 border-white" : "bg-white border-green-500"}`}
          >
            <CheckIcon
              className={`group-hover:text-white ${todo.completed ? "text-white" : "text-green-500"}`}
              style={{ fontSize: "35px" }}
            />
          </button>
        </div>

        <div className="space-y-3">
          <h2 className={`text-right text-3xl font-extrabold ${todo.completed ? "line-through text-gray-400" : "none"}`}>{todo.title}</h2>
          <p className={`font-medium text-lg text-gray-100 ${todo.completed ? "line-through text-gray-400" : "none"}`}>{todo.details}</p>
        </div>
      </div>
      {/* Icons End */}



      {/*  Aleart Updating Start */}
      <div
        className={`w-screen h-screen bg-[#000000a0] absolute inset-0 z-10 duration-300 ${updateModule ? "block" : "hidden"}`}
      >
        <div className="absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] bg-white w-[50%] h-auto rounded-sm">
          <h2 className="font-header font-extrabold text-3xl text-right text-gray-600 pe-6 py-4">
            تعديل المهمه
          </h2>
          <div>
            <label className="block text-left ps-6 font-bold text-lg text-gray-600">
              العنوان
            </label>
            <input
              value={updateTodo.title}
              onChange={(event) => {
                setUpdateTodo({ ...updateTodo, title: event.target.value });
              }}
              className="w-[95%] font-bold text-xl text-right py-3 border-b-2 border-gray-500 focus:border-[#88173d] duration-300 outline-0 pe-2"
              type="text"
            />

            <label className="block text-left ps-6 font-bold text-lg text-gray-600 mt-4">
              التفاصيل
            </label>
            <input
              value={updateTodo.details}
              onChange={(event) => {
                setUpdateTodo({ ...updateTodo, details: event.target.value });
              }}
              className="w-[95%] font-bold text-xl text-right py-3 border-b-2 border-gray-500 focus:border-[#88173d] duration-300 outline-0 pe-2"
              type="text"
            />
          </div>
          <div className="space-x-4 text-white font-extrabold text-xl mt-10 mb-8 w-full text-left ps-6">
            <button
              onClick={confirmUpdate}
              className="cursor-pointer bg-green-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-green-500"
            >
              حفظ التعديلات
            </button>
            <button
              onClick={NoUpdate1}
              className="cursor-pointer bg-red-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-red-800"
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
      {/*  Aleart Updating End */}
    </>
  );
}

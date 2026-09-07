// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

// Hooks
import { useContext } from "react";
import { checkContext } from "../Context/context";

export default function List({ todo, showDelete, showUpdate }) {
  const { list, setList } = useContext(checkContext);

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


  // Functions Deleting Todo Start
  function delelteTodo() {
    showDelete(todo);
  }
  // Functions Deleting Todo End

  
  // Functions Update Todo Start
  function updateTodo1() {
    showUpdate(todo);
  }
  // Functions Update Todo End


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
          <h2
            className={`text-right text-3xl font-extrabold ${todo.completed ? "line-through text-gray-400" : "none"}`}
          >
            {todo.title}
          </h2>
          <p
            className={`font-medium text-lg text-gray-100 ${todo.completed ? "line-through text-gray-400" : "none"}`}
          >
            {todo.details}
          </p>
        </div>
      </div>
      {/* Icons End */}
    </>
  );
}

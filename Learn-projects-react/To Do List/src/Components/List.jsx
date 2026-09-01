import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export default function List({ title, body }) {
  return (
    <div className="flex justify-between items-center bg-blue-950 text-white hover:h-37 duration-200 px-4 h-28 rounded-[5px] cursor-pointer mb-10 hover:shadow-xl hover:shadow-black/40">
      <div className="space-x-7 flex items-center">
        {/* زرار الحذف */}
        <button className="bg-white border-2 border-red-500 p-1 rounded-full cursor-pointer hover:bg-red-600 transition-colors group">
          <DeleteIcon
            className="text-red-500 group-hover:text-white"
            style={{ fontSize: "35px" }}
          />
        </button>

        {/* زرار التعديل */}
        <button className="bg-white border-2 border-blue-500 p-1 rounded-full cursor-pointer hover:bg-blue-600 transition-colors group">
          <EditIcon
            className="text-blue-500 group-hover:text-white"
            style={{ fontSize: "35px" }}
          />
        </button>

        {/* زرار التأكيد */}
        <button className="bg-white border-2 border-green-500 p-1 rounded-full cursor-pointer hover:bg-green-600 transition-colors group">
          <CheckIcon
            className="text-green-500 group-hover:text-white"
            style={{ fontSize: "35px" }}
          />
        </button>
      </div>

      <div className="space-y-3">
        <h2 className="text-right text-3xl font-extrabold">{title}</h2>
        <p className="font-medium text-lg text-gray-100">{body}</p>
      </div>
    </div>
  );
}

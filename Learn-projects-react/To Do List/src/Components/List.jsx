import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/UpdateSharp";
import AcUnitOutlined from "@mui/icons-material/AccessAlarm";

export default function List({ title, body }) {
  return (
    <div className="flex justify-between items-center bg-blue-950 text-white hover:h-37 duration-300 px-4 h-28 rounded-[5px] cursor-pointer mb-10">
      <div className="space-x-7">
        <DeleteIcon
          className="deleteIcon text-red-500 bg-white border-2 border-red-500 p-[5px] flex justify-center items-center rounded-full cursor-pointer hover:bg-red-600 hover:text-white"
          style={{ fontSize: "43px" }}
        />
        <UpdateIcon
          className="deleteIcon text-blue-500 bg-white border-2 border-blue-500 p-[5px] flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-600 hover:text-white"
          style={{ fontSize: "43px" }}
        />
        <AcUnitOutlined
          className="deleteIcon text-green-500 bg-white border-2 border-green-500 p-[5px] flex justify-center items-center rounded-full cursor-pointer hover:bg-green-600 hover:text-white"
          style={{ fontSize: "43px" }}
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-right text-3xl font-extrabold">{title}</h2>
        <p className="font-medium text-lg text-gray-100">{body}</p>
      </div>
    </div>
  );
}

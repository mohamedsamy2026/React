export default function CreateList() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button className="deleteIcon py-[14px] bg-[#88173d]  rounded-sm text-xl font-bold text-white w-[25%] cursor-pointer hover:bg-[#5f0c28] duration-300">
        إضافه
      </button>
      <input
        className="w-[75%] border-[1.8px] border-gray-400 py-[14px] px-2 ms-2 rounded-sm outline-0 font-bold text-lg hover:border-gray-600 duration-300"
        type="text"
        placeholder="عنوان المهمه"
      />
    </div>
  );
}

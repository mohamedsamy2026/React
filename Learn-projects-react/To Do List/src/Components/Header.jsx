export default function Header() {
  return (
    <div>
      <h1 className="font-black text-7xl font-header border-b-1 border-gray-400">
        مهامي
      </h1>

      <div
        className="flex justify-between items-center my-8 font-bold text-[20px] border-1 border-gray-500 cursor-pointer w-fit mx-auto"
        dir="rtl"
      >
        <span className="bg-gray-400 p-3 text-white border-e-1 border-gray-500 hover:bg-gray-500 duration-300">
          الكل
        </span>
        <span className="p-3">منجز</span>
        <span className="p-3 bg-red-500 text-white border-s-1 border-red-500 hover:bg-red-600 duration-300">
          غير منجز
        </span>
      </div>
    </div>
  );
}

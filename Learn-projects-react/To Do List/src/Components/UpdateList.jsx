export default function UpdateList() {
  return (
    <>
      <div className="w-screen h-screen bg-[#000000a0] absolute inset-0 invisible z-10 duration-300">
        <div className="absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] bg-white w-[50%] h-auto rounded-sm">
          <h2 className="font-header font-extrabold text-3xl text-right text-gray-600 pe-6 py-4">
            تعديل المهمه
          </h2>
          <div>
            <label className="block text-left ps-6 font-bold text-lg text-gray-600">
              العنوان
            </label>
            <input
              className="w-[95%] font-bold text-xl text-right py-3 border-b-2 border-gray-500 focus:border-[#88173d] duration-300 outline-0 pe-2"
              type="text"
              value="قرأه كتاب 1"
            />

            <label className="block text-left ps-6 font-bold text-lg text-gray-600 mt-4">
              التفاصيل
            </label>
            <input
              className="w-[95%] font-bold text-xl text-right py-3 border-b-2 border-gray-500 focus:border-[#88173d] duration-300 outline-0 pe-2"
              type="text"
              value="انجازه في شهر 1"
            />
          </div>
          <div className="space-x-4 text-white font-extrabold text-xl mt-10 mb-8 w-full text-left ps-6">
            <button className="cursor-pointer bg-green-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-green-500">
              تعديل
            </button>
            <button className="cursor-pointer bg-red-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-red-800">
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

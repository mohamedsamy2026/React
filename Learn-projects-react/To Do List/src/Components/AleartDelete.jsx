export default function AleartDelete() {
  return (
    <>
      <div className="w-screen h-screen bg-[#000000a0] absolute inset-0 opacity-0 hidden z-10duration-300">
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
            <button className="cursor-pointer bg-red-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-red-800">
              نعم قم بالحذف
            </button>
            <button className="cursor-pointer bg-green-600 duration-300 py-[12px] px-5 rounded-sm hover:bg-green-800">
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

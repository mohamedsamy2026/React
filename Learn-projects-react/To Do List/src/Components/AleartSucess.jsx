import UpdateIcon from "@mui/icons-material/AccessAlarm";

export default function AleartSucess() {
  return (
    <div className="flex justify-center items-center absolute -top-20 right-20 text-white bg-green-600 font-bold text-lg py-2 px-3 rounded-sm cursor-pointer space-x-3 duration-300">
      <UpdateIcon />
      <h2>تم التعديل بنجاح</h2>
    </div>
  );
}

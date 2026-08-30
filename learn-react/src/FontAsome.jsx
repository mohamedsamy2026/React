import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faThumbTack } from "@fortawesome/free-solid-svg-icons";

function MyComponent() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* ثانياً: استخدام الأيقونة وتعديل حجمها ولونها بالـ className */}
      <div className="w-12 h-12 rounded-full bg-red-200 hover:bg-red-300 rounded-full flex items-center justify-center cursor-pointer duration-200">
        <FontAwesomeIcon icon={faTrash} className="text-red-500 text-2xl" />
      </div>
      <FontAwesomeIcon icon={faThumbTack} />
    </div>
  );
}

export default MyComponent;

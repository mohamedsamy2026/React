import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function MyComponent() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* ثانياً: استخدام الأيقونة وتعديل حجمها ولونها بالـ className */}
      <FontAwesomeIcon icon={faTrash} className="text-red-500 text-3xl" />
    </div>
  );
}

export default MyComponent;
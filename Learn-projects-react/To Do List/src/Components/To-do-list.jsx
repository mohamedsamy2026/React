import Header from "./Header";
import List from "./List";
import CreateList from "./CreateList";
import AleartSucess from "./AleartSucess";
import UpdateList from "./UpdateList";
import AleartDelete from "./AleartDelete";

export default function ToDoList() {
  return (
    <div className="bg-white  w-[40%] h-auto py-5 px-6 rounded-[10px] text-center">
      <Header />
      <List title="قرأه كتاب" body="انجازه في شهر 1" />
      <List title="قرأه كتاب" body="انجازه في شهر 2" />
      <List title="قرأه كتاب" body="انجازه في شهر 3" />
      <CreateList />
      <AleartSucess />
      <UpdateList />
      <AleartDelete />
    </div>
  );
}

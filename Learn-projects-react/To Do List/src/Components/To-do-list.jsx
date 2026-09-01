import Header from "./Header";
import List from "./List";
import CreateList from "./CreateList";
import AleartSucess from "./AleartSucess";
import UpdateList from "./UpdateList";
import AleartDelete from "./AleartDelete";

let list = [
  {
    id: 1,
    title: "قرأه كتاب",
    body: "انجازه في شهر",
  },
];

export default function ToDoList() {
  let ListRead = list.map((oneList) => {
    return <List key={oneList.id} title={oneList.title} body={oneList.body} />;
  });
  return (
    <div className="bg-white  w-[40%] h-auto py-5 px-6 rounded-[10px] text-center">
      <Header />

      {ListRead}

      <CreateList />

      <AleartSucess />

      <UpdateList />

      <AleartDelete />
    </div>
  );
}

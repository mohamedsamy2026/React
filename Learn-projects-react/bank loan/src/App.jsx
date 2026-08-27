import "./App.css";
import Ui from "./Ui";
import { usersContext } from "./context/UsersContext";

function App() {
  return (
    <usersContext.Provider
      value={{
        name: "Mohamed",
        email: "mohamedeng747@gmail.com",
        phone: "01115083459",
      }}
    >
      <div className="father">
        <Ui />
      </div>
    </usersContext.Provider>
  );
}

export default App;

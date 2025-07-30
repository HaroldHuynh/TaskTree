import "./styles/App.css";
import MainTaskList from "./components/MainTaskList.tsx";
import ParsedMainTasks from "./components/ParsedMainTasks.tsx";
import AddMainTaskBtn from "./components/AddMainTaskBtn.tsx";

function App() {
  const MainTasks = <ParsedMainTasks />;
  return (
    <>
      <MainTaskList>{MainTasks}</MainTaskList>
      <AddMainTaskBtn></AddMainTaskBtn>
    </>
  );
}

export default App;

import "./styles/App.css";
import MainTask from "./components/MainTask.tsx";

const mainTaskTest = [
  {
    title: "Do Homework",
    description: "Finish my History homework by 10pm",
  },
];

function App() {
  return (
    <ul className="list-group">
      <MainTask
        title={mainTaskTest[0].title}
        description={mainTaskTest[0].description}
      ></MainTask>
    </ul>
  );
}

export default App;

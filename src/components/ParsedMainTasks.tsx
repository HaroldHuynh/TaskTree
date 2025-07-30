import MainTask from "./MainTask";
import data from "../data/testData.json";

const ParsedMainTasks = () => {
  return (
    <div>
      {data.map((task) => {
        return (
          <MainTask
            title={task.title}
            description={task.description}
          ></MainTask>
        );
      })}
    </div>
  );
};

export default ParsedMainTasks;

import data from "../data/testData.json";
import { writeTextFile } from "@tauri-apps/plugin-fs";

const AddMainTaskBtn = () => {
  const handleClick = () => {
    function writeFile() {
      data.push({
        title: "TestTit",
        description: "TestDes",
      });
      writeTextFile("../data/testData1.json", JSON.stringify(data));
    }
    function promiseFunc() {
      return new Promise((resolve, reject) => {
        const writeFileBool = true;
        if (writeFileBool) {
          resolve(writeFile());
        } else {
          reject("FILE NOT WRITTEN");
        }
      });
    }
    async function awaitFunc() {
      await promiseFunc();
    }
    awaitFunc();
  };

  return (
    <div>
      <button onClick={handleClick}></button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default AddMainTaskBtn;

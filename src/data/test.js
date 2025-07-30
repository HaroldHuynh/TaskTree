import fs from "fs"
import data from "./testData.json"

data.push({title: "TITLETITS", description: "DESTEST"})
fs.writeFileSync("./testData.json", JSON.stringify(data))
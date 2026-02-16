import { watch } from "node:fs";

console.log("Watching for file changes...");
watch("./", (eventType, filename) => {
  console.log("----------------------");
  console.log("Event Type: ", eventType);
  if (filename) {
    console.log("Filename: ", filename);
  }
});

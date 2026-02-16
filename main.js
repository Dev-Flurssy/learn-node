import { save, on } from "./utils.js";

on("file:saved", ({ location }) => {
  console.log(`File saved at ${location}`);
});

console.log("Saving file...");

save("test.txt", "Hello world!").catch((err) =>
  console.error("Error saving file:", err),
);

console.log("The file is being saved but is not blocking the execution...");

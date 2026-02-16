import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

// Listener 1
emitter.on("message", (message) => {
  console.log("Message received:", message);
});

// Emit immediately
emitter.emit("message", "Hello Bisola!");

// Emit every second
setInterval(() => {
  emitter.emit("message", `Interval ${Date.now()}`);
}, 1000);

// Listener 2
emitter.on("message", (message) => {
  console.log("Another listener:", message);
});

// Once listener
emitter.once("message", (message) => {
  console.log("This will only be logged once:", message);
});

// Trigger the once listener after 2 seconds
setTimeout(() => {
  emitter.emit("message", "This will trigger the once listener");
}, 2500);

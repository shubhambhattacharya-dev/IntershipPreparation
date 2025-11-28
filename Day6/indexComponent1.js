import { CustomEmitter } from "./component1.js";

const emitter = new CustomEmitter();

emitter.on("login", (user) => {
    console.log(`User logged in: ${user.name}`);
});

emitter.emit("login", { name: "Shubham" });

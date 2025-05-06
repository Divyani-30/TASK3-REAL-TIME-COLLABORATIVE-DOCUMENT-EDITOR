import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

socket.on("document-update", (data) => {
});

socket.emit("edit-document", updatedContent);

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("edit-document", (data) => {
    socket.broadcast.emit("document-update", data);
  });
});

server.listen(5000, () => console.log("Server on port 5000"));

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://chat-6iyh.onrender.com",

    methods: ["GET", "POST"],
  },
});

const users = {};

io.on("connection", (socket) => {
  console.log("new client connection  " + socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
  }

  io.emit("getOnline", Object.keys(users));

  socket.on("disconnect", () => {
    console.log("Client disconnected" + socket.id);
    delete users[userId];
    io.emit("getOnline", Object.keys(users));
  });
});

const getSocketId = (userId) => {
  return users[userId];
};

export { app, io, server, getSocketId };

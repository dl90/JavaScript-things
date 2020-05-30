const express = require("express"),
  path = require("path"),
  http = require("http"),
  socketIO = require("socket.io"),
  port = process.env.PORT || 8888,
  app = express(),
  server = http.createServer(app),
  io = socketIO(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
  console.log("New connection");

  // single client
  socket.emit("initial", "Welcome, you are connected");

  console.log(req.cookies);
  const user = "test";
  // all clients
  socket.broadcast.emit("CHANNEL", `${user} has joined the chat`);
});

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

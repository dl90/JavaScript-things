const socket = io();
const content = document.querySelector("#cont");
socket.on("initial", msg => {
  const div = document.createElement("div");
  div.innerText = msg;
  content.appendChild(div);
});

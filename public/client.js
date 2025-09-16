const socket = io();
const chatBox = document.getElementById("chat-box");
const msgInput = document.getElementById("msg");

function sendMessage() {
  const message = msgInput.value;
  if (message.trim()) {
    socket.emit("chatMessage", message);
    msgInput.value = "";
  }
}

socket.on("chatMessage", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});

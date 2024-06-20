// Dummy users and messages
const users = ["Alice", "Bob"];
const messages = [
  { user: "Alice", text: "Hello!" },
  { user: "Bob", text: "Hi there!" },
  { user: "Alice", text: "How are you?" },
  { user: "Bob", text: "I'm good, thanks!" },
  { user: "Alice", text: "What's new?" },
];

// Function to simulate receiving a message
function receiveMessage(user, text) {
  var messageContainer = document.getElementById("chat-messages");
  var messageElement = document.createElement("div");
  messageElement.classList.add("message");

  if (user === "self") {
    messageElement.classList.add("self");
  }

  messageElement.textContent = text;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to bottom
}

// Function to send a message
function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var messageText = messageInput.value.trim();

  if (messageText !== "") {
    receiveMessage("self", messageText);
    simulateReply();
    messageInput.value = "";
  }
}

// Function to simulate a reply from the other user
function simulateReply() {
  setTimeout(function () {
    var randomUser = users[Math.floor(Math.random() * users.length)];
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    receiveMessage(randomUser, randomMessage.text);
  }, 1000); // Simulate delay for a more realistic feel
}

// Initial simulation of conversation
setTimeout(function () {
  receiveMessage(users[0], messages[0].text);
  setTimeout(function () {
    receiveMessage(users[1], messages[1].text);
  }, 1000); // Simulate delay for a more realistic feel
}, 500); // Simulate initial delay

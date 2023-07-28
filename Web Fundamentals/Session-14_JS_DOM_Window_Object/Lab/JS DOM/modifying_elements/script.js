// Get the message element by ID
var message = document.getElementById("message");

// Change the text of the message
message.textContent = "Please choose a topic from the menu below:";

// Change the style of the message
message.classList.add("highlight");

// Add a new topic to the list
var newTopic = document.createElement("li");
newTopic.textContent = "Topic 4";
var topicList = document.querySelector("ul");
topicList.appendChild(newTopic);

// Remove the last topic from the list
var lastTopic = document.querySelectorAll("li")[3];
topicList.removeChild(lastTopic);

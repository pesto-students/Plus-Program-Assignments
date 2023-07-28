// Get the add and delete buttons
var addButton = document.getElementById("add");
var deleteButton = document.getElementById("delete");

// Get the topics list
var topicList = document.getElementById("topics");

// Add a new topic when the add button is clicked
addButton.addEventListener("click", function() {
	var newTopic = document.createElement("li");
	newTopic.textContent = "Topic " + (topicList.children.length + 1);
	topicList.appendChild(newTopic);
});

// Delete the last topic when the delete button is clicked
deleteButton.addEventListener("click", function() {

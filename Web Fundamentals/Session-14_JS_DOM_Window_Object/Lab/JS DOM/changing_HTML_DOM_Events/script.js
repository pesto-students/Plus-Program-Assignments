// Get the message element by ID
var message = document.getElementById("message");

// Change the HTML of the message to include a link
message.innerHTML = "Please select a <a href='#'>topic</a> from the menu.";

// Get the topics list
var topicList = document.querySelector("ul");

// Add a description to each topic
for (var i = 0; i < topicList.children.length; i++) {
  var topic = topicList.children[i];
  topic.innerHTML += " - Click to learn more.";
}

// Add a click event listener to each topic
topicList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert(event.target.textContent);
  }
});

// Add a new heading and paragraph to the page
var newHeading = document.createElement("h2");
newHeading.textContent = "About Us";
document.body.insertBefore(newHeading, topicList);

var newParagraph = document.createElement("p");
newParagraph.textContent =
  "We are a company that specializes in web development.";
document.body.insertBefore(newParagraph, topicList);

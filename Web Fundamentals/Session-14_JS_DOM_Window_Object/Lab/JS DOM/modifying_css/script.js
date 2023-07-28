// Get the highlight button
var highlightButton = document.getElementById("highlight");

// Get the message element by ID
var message = document.getElementById("message");

// Highlight the message when the highlight button is clicked
highlightButton.addEventListener("click", function () {
  message.classList.toggle("highlight");
});

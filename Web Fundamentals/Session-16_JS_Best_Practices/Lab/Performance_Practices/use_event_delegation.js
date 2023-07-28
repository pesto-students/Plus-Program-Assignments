// Slow
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("Button " + i + " clicked");
  });
}

// Faster
document.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button " + i + " clicked");
  }
});

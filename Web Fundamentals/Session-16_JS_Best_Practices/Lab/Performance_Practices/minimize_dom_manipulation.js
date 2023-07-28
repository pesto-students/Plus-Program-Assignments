// Slow
for (var i = 0; i < 1000; i++) {
  document.getElementById("myDiv").innerHTML += "Hello World!";
}

// Faster
var myDiv = document.getElementById("myDiv");
var content = "";
for (var i = 0; i < 1000; i++) {
  content += "Hello World!";
}
myDiv.innerHTML = content;

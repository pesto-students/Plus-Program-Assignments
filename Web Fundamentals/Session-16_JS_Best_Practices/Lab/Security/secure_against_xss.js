var input = '<script>alert("XSS");</script>';
var output = document.createElement("div");
output.innerText = input;
document.body.appendChild(output);

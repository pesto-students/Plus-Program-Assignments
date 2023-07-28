function getData(callback) {
  // fetch data from server
  // ...
  // once the data is retrieved, execute the callback function
  callback(data);
}

function displayData(data) {
  // display the data on the webpage
  // ...
}

getData(displayData);

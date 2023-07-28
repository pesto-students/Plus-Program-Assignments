async function getData() {
  // fetch data from server
  // ...
  // once the data is retrieved, return the data
  return data;
}

async function displayData() {
  try {
    const data = await getData();
    // display the data on the webpage
    // ...
  } catch (error) {
    // handle any errors that occur
    // ...
  }
}

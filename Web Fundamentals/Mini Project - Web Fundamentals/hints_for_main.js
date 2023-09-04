// // In this example, we define the API endpoint and access token at the top of the file.
// Then, we select the necessary DOM elements using document.querySelector.

// // We define an event listener for the generate button that calls the getQuotes function asynchronously
// using async/await syntax. Inside the getQuotes function, we construct the API request body and options,
// make the API call using fetch, and parse the response using response.json(). We then extract the quotes from
// the API response and return them.

// // Finally, we define a displayQuotes function to display the quotes on the page by creating
// a new div element for each quote and appending it to the quotesContainer element.

// // Note: To use the OpenAI API, you need to get an access token.
// You can get one by signing up for the OpenAI API and following the instructions on their website.
// Once you have an access token, replace YOUR_ACCESS_TOKEN_HERE with your actual token in the ACCESS_TOKEN variable.

// Define API endpoint and access token
const API_ENDPOINT =
  "https://api.openai.com/v1/engines/davinci-codex/completions";
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN_HERE";

// Define DOM elements
const topicInput = document.querySelector("#topic-input");
const generateButton = document.querySelector("#generate-button");
const quotesContainer = document.querySelector("#quotes-container");

// Define event listener for the generate button
generateButton.addEventListener("click", async () => {
  const topic = topicInput.value;
  const quotes = await getQuotes(topic);
  displayQuotes(quotes);
});

// Define function to make API call and get quotes
async function getQuotes(topic) {
  // Construct API request body
  const requestBody = {
    prompt: `Generate 5 quotes about ${topic}`,
    max_tokens: 100,
    n: 5,
    stop: ["\n"],
  };

  // Construct API request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(requestBody),
  };

  // Make API call and parse response
  const response = await fetch(API_ENDPOINT, requestOptions);
  const data = await response.json();
  const quotes = data.choices.map((choice) => choice.text.trim());

  return quotes;
}

// Define function to display quotes on the page
function displayQuotes(quotes) {
  quotesContainer.innerHTML = "";
  quotes.forEach((quote) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");
    quoteElement.innerText = quote;
    quotesContainer.appendChild(quoteElement);
  });
}

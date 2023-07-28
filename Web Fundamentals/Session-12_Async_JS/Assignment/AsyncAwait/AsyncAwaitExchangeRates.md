**Problem Statement** 

Your task is to create a JavaScript function that fetches the latest exchange rates from the [exchange rates API ](https://api.exchangerate.host/latest)and returns the exchange rate for a given currency code. 

Your function should use async/await to handle the asynchronous nature of fetching data from the API. 

Here's the signature of the function you need to create: 

async function getExchangeRate(currencyCode) {   // Your code here 

} 

The getExchangeRate function takes a single argument, currencyCode, which is a string representing the currency code for which you want to retrieve the exchange rate (e.g. "USD", "EUR", "JPY", etc.). 

The function should make an asynchronous request to the exchange rates API to fetch the latest exchange rates. The API returns a JSON object containing the latest rates for all currencies, with the base currency being EUR. 

Your function should parse the JSON response and extract the exchange rate for the specified currencyCode. The exchange rate should be returned as a number rounded to 4 decimal places. 

If the specified currencyCode is not found in the response, your function should return null. Here's an example usage of the getExchangeRate function: 

getExchangeRate('USD') 

.then((rate) => { 

`    `console.log(rate); // Output: 1.2133   }) 

.catch((error) => { 

`    `console.error(error); 

`  `}); 

**Requirements** 

- Your function should use async/await to handle the asynchronous nature of fetching data from the API. 
- Your function should make a request to the exchange rates API using the fetch API or a library like axios. 
- Your function should handle errors appropriately and return meaningful error messages. 
- Your function should round the exchange rate to 4 decimal places. 
- Your function should return null if the specified currencyCode is not found in the API response. 

**Testing** 

To test your function, you can call it with different currency codes and check the output. Here's an example: 

getExchangeRate('USD') 

.then((rate) => { 

`    `console.log(rate); // Output: 1.2133   }) 

.catch((error) => { 

`    `console.error(error); 

`  `}); 

You can also test your function by passing in a currency code that is not found in the API response: 

getExchangeRate('XYZ') 

.then((rate) => { 

`    `console.log(rate); // Output: null   }) 

.catch((error) => { 

`    `console.error(error); 

`  `}); 

**Submission** 

Please submit your implementation as a single JavaScript file, along with any necessary instructions for testing it. 

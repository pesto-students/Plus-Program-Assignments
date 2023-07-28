//Convert to JSON
const personObject = { name: "John Doe", age: 30 };
const jsonConverted = JSON.stringify(person);

console.log(jsonConverted); // '{ "name": "John Doe", "age": 30 }'

// Parse a JSON
const jsonString = '{ "name": "John Doe", "age": 30 }';
const personConvertedObject = JSON.parse(jsonString);

console.log(personConvertedObject.name); // "John Doe"
console.log(personConvertedObject.age); // 30

//Importing JSON file
import data from "./json_demo.json";

console.log(data.name); // "John"
console.log(data.age); // 30
console.log(data.city); // "New York"

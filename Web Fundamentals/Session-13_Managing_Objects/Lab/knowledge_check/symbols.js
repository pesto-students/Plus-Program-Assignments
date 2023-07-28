const mySymbol = Symbol("sym1");

const myObject = {
  [mySymbol]: "hello world",
};

console.log(myObject[mySymbol]); // Output: 'hello world'
console.log(myObject["sym1"]); // Output: undefined

function* symbolIterator(arr) {
  for (const str of arr) {
    yield Symbol(str);
  }
}

const input = ["hello", "world", "test"];
const iterator = symbolIterator(input);

console.log(iterator.next().value.description); // { value: Symbol(hello), done: false }
console.log(iterator.next()); // { value: Symbol(world), done: false }
console.log(iterator.next()); // { value: Symbol(test), done: false }
console.log(iterator.next()); // { value: undefined, done: true }

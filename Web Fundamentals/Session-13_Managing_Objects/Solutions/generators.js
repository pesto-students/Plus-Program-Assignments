function* stringSymbols(arr) {
  for (let str of arr) {
    yield Symbol(str);
  }
}

const arr = ["hello", "world", "test"];
const symbolIterator = stringSymbols(arr);

console.log(symbolIterator.next().value);
console.log(symbolIterator.next().value);
console.log(symbolIterator.next().value);

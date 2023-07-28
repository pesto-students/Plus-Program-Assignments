const myObject = {
  [Symbol.iterator]: function* () {
    yield "foo";
    yield "bar";
    yield "baz";
  },
};

for (let value of myObject) {
  console.log(value);
}

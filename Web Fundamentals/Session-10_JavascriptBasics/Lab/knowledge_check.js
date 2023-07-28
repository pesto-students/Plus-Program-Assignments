function outer() {
  let x = 10;
  function inner() {
    x++;
    console.log(x);
  }
  return inner;
}
const closure1 = outer();
const closure2 = outer();
closure1();
closure1();
closure2();

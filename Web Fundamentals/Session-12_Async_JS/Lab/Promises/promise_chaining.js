function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1 resolved");
      resolve(1);
    }, 1000);
  });
}

function promise2(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2 resolved");
      resolve(value + 2);
    }, 1000);
  });
}

function promise3(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 3 resolved");
      resolve(value + 3);
    }, 1000);
  });
}

promise1()
  .then(promise2)
  .then(promise3)
  .then((finalValue) => {
    console.log(`Final Value: ${finalValue}`);
  })
  .catch((error) => {
    console.error(error);
  });

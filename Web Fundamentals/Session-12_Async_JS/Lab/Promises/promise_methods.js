// Promise.all example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000);
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.race example
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 5000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 4 rejected");
  }, 2000);
});

Promise.race([promise3, promise4])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.resolve example
const promise5 = Promise.resolve("Promise 5 resolved immediately");
promise5.then((value) => {
  console.log(value);
});

// Promise.reject example
const promise6 = Promise.reject(new Error("Promise 6 rejected immediately"));
promise6.catch((error) => {
  console.error(error);
});

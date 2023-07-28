const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

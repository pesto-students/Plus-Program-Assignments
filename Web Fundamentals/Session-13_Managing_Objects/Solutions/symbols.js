function generateTransactionId() {
  let counter = 0;
  return function () {
    counter++;
    return Symbol(`TRANSACTION_ID_${counter}`);
  };
}

const getTransactionId = generateTransactionId();

const transaction1 = getTransactionId();
console.log(transaction1.description);

const transaction2 = getTransactionId();
console.log(transaction2.description);

const transaction3 = getTransactionId();
console.log(transaction3.description);

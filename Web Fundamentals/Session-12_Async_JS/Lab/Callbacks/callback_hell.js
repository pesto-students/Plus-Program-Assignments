getUser(function (user) {
  getAccount(user.id, function (account) {
    getTransactions(account.id, function (transactions) {
      calculateBalance(transactions, function (balance) {
        displayBalance(balance);
      });
    });
  });
});

function getUser(callback) {
  setTimeout(() => {
    const user = { id: 123, name: "John Doe" };
    callback(user);
  }, 1000);
}

function getAccount(userId, callback) {
  setTimeout(() => {
    const account = { id: 456, userId: userId };
    callback(account);
  }, 1000);
}

function getTransactions(accountId, callback) {
  setTimeout(() => {
    const transactions = [10, -5, 20, -10];
    callback(transactions);
  }, 1000);
}

function calculateBalance(transactions, callback) {
  setTimeout(() => {
    const balance = transactions.reduce((acc, val) => acc + val, 0);
    callback(balance);
  }, 1000);
}

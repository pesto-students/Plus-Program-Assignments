-- Create the table Accounts with account_id and balance columns
CREATE TABLE Accounts (
  account_id INT PRIMARY KEY,
  balance DECIMAL(10, 2)
);

-- Insert initial data into the Accounts table
INSERT INTO Accounts (account_id, balance) VALUES (1, 1000.00);
INSERT INTO Accounts (account_id, balance) VALUES (2, 2000.00);

BEGIN;
UPDATE Accounts SET balance = balance - 500.00 WHERE account_id = 1;
UPDATE Accounts SET balance = balance + 500.00 WHERE account_id = 2;
COMMIT;

BEGIN;
UPDATE Accounts SET balance = balance - 200.00 WHERE account_id = 2;
UPDATE Accounts SET balance = balance + 200.00 WHERE account_id = 1;
COMMIT;


-- If you execute these two transactions simultaneously, it's possible that they might encounter a deadlock. For instance, 
-- Transaction 1 acquires a lock on the account_id = 1 row, and Transaction 2 acquires a lock on the account_id = 2 row.
--  Now, when Transaction 1 tries to update the account_id = 2 row 
-- and Transaction 2 tries to update the account_id = 1 row, both transactions will be blocked, leading to a deadlock.
-- Start a transaction
START TRANSACTION;

-- Update the age of a student with student_id = 1
UPDATE STUDENTS
SET age = 21
WHERE student_id = 1;

-- Show the updated data before committing the transaction
SELECT * FROM STUDENTS WHERE student_id = 1;

-- Save the transaction (Savepoint)
SAVEPOINT my_savepoint;

-- Delete a student with student_id = 2
DELETE FROM STUDENTS
WHERE student_id = 2;

-- Show the data after the delete but before committing the transaction
SELECT * FROM STUDENTS;

-- Rollback to the savepoint to undo the delete
ROLLBACK TO my_savepoint;

-- Show the data after the rollback
SELECT * FROM STUDENTS;

-- Commit the changes to the database
COMMIT;

-- Show the final data after the commit
SELECT * FROM STUDENTS;

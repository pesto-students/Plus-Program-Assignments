-- Insert two rows into the table
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (1, 'John Doe', 20);
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (2, 'Jane Smith', 22);

-- Update the age of a student with student_id = 1
UPDATE STUDENTS
SET age = 21
WHERE student_id = 1;

-- Delete a student with student_id = 2
DELETE FROM STUDENTS
WHERE student_id = 2;

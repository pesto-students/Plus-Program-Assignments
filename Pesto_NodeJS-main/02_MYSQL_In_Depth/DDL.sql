-- Create the table STUDENTS with 3 columns: student_id, student_name, and age
CREATE TABLE STUDENTS (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(50),
  age INT
);

-- Insert two rows into the table
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (1, 'John Doe', 20);
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (2, 'Jane Smith', 22);

-- Delete the table STUDENTS
DROP TABLE STUDENTS;

-- Alter the table STUDENTS
ALTER TABLE STUDENTS ADD COLUMN email VARCHAR(100);

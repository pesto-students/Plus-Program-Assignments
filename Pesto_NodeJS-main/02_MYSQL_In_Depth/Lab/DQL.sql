-- Query 1: SELECT statement to retrieve all columns for students with age greater than 20
SELECT * FROM STUDENTS WHERE age > 20;

-- Query 2: SELECT statement to retrieve specific columns for students belonging to the 'Science' category
SELECT student_id, student_name FROM STUDENTS WHERE category = 'Science';

-- Query 3: SELECT statement with ORDER BY to retrieve top 5 oldest students
SELECT student_id, student_name, age FROM STUDENTS ORDER BY age DESC LIMIT 5;

-- Create the table STUDENTS with 3 columns: student_id, student_name, and age
CREATE TABLE STUDENTS (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(50),
  age INT
);

-- Insert two rows into the table
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (1, 'John Doe', 20);
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (2, 'Jane Smith', 22);

-- Create the table COURSES with 2 columns: course_id and course_name
CREATE TABLE COURSES (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100)
);

-- Insert some sample courses
INSERT INTO COURSES (course_id, course_name) VALUES (101, 'Mathematics');
INSERT INTO COURSES (course_id, course_name) VALUES (102, 'Science');
INSERT INTO COURSES (course_id, course_name) VALUES (103, 'History');


-- Example of INNER JOIN: Retrieve students and their enrolled courses
SELECT s.student_id, s.student_name, c.course_name
FROM STUDENTS s
INNER JOIN STUDENT_COURSES sc ON s.student_id = sc.student_id
INNER JOIN COURSES c ON sc.course_id = c.course_id;


-- Example of LEFT JOIN: Retrieve all students and their enrolled courses (including students with no courses)
SELECT s.student_id, s.student_name, c.course_name
FROM STUDENTS s
LEFT JOIN STUDENT_COURSES sc ON s.student_id = sc.student_id
LEFT JOIN COURSES c ON sc.course_id = c.course_id;


-- Example of RIGHT JOIN: Retrieve all courses and their enrolled students (including courses with no students)
SELECT c.course_id, c.course_name, s.student_name
FROM COURSES c
RIGHT JOIN STUDENT_COURSES sc ON c.course_id = sc.course_id
RIGHT JOIN STUDENTS s ON sc.student_id = s.student_id;

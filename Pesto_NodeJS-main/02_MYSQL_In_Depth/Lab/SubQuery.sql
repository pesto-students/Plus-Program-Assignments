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

-- Create a junction table to store student-course enrollments
CREATE TABLE STUDENT_COURSES (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES STUDENTS (student_id),
  FOREIGN KEY (course_id) REFERENCES COURSES (course_id)
);

-- Enroll students in courses (insert sample enrollments)
INSERT INTO STUDENT_COURSES (student_id, course_id) VALUES (1, 101);
INSERT INTO STUDENT_COURSES (student_id, course_id) VALUES (1, 102);
INSERT INTO STUDENT_COURSES (student_id, course_id) VALUES (2, 101);

-- Retrieve students who are enrolled in the course "Mathematics" (using a subquery)
SELECT student_id, student_name
FROM STUDENTS
WHERE student_id IN (
  SELECT student_id
  FROM STUDENT_COURSES
  WHERE course_id = (
    SELECT course_id
    FROM COURSES
    WHERE course_name = 'Mathematics'
  )
);

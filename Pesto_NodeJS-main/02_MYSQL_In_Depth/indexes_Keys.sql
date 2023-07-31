-- Create the table STUDENTS with 3 columns: student_id, student_name, and age
CREATE TABLE STUDENTS (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(50),
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the table COURSES with 2 columns: course_id and course_name
CREATE TABLE COURSES (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100),
  instructor_name VARCHAR(50)
);

-- Add PRIMARY KEY and UNIQUE CONSTRAINT to the STUDENTS table
ALTER TABLE STUDENTS
ADD CONSTRAINT PK_STUDENTS PRIMARY KEY (student_id),
ADD CONSTRAINT UQ_STUDENT_NAME UNIQUE (student_name);

-- Add PRIMARY KEY and FOREIGN KEY to the COURSES table
ALTER TABLE COURSES
ADD CONSTRAINT PK_COURSES PRIMARY KEY (course_id),
ADD CONSTRAINT FK_INSTRUCTOR FOREIGN KEY (instructor_name) REFERENCES STUDENTS (student_name);

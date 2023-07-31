-- Create the table STUDENTS with 3 columns: student_id, student_name, and age
CREATE TABLE STUDENTS (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(50),
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Create a trigger named "update_timestamp" on the STUDENTS table
DELIMITER //
CREATE TRIGGER update_timestamp
BEFORE INSERT ON STUDENTS
FOR EACH ROW
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP();
END;
//
DELIMITER ;


-- Insert a new row into the STUDENTS table
INSERT INTO STUDENTS (student_id, student_name, age) VALUES (3, 'Alice Johnson', 25);

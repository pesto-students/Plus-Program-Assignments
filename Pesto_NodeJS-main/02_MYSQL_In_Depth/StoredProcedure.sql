-- Create a stored procedure named "INSERT_STUDENT"
DELIMITER //
CREATE PROCEDURE INSERT_STUDENT(
  IN student_name_param VARCHAR(50),
  IN age_param INT
)
BEGIN
  -- Insert a new student into the STUDENTS table
  INSERT INTO STUDENTS (student_name, age) VALUES (student_name_param, age_param);
END;
//
DELIMITER ;


-- Call the INSERT_STUDENT stored procedure with values for parameters
CALL INSERT_STUDENT('Bob Johnson', 22);

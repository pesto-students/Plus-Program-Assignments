-- Create the view STUDENT_COURSES_VIEW that combines data from STUDENTS and COURSES tables
CREATE VIEW STUDENT_COURSES_VIEW AS
SELECT s.student_id, s.student_name, c.course_name
FROM STUDENTS s
LEFT JOIN STUDENT_COURSES sc ON s.student_id = sc.student_id
LEFT JOIN COURSES c ON sc.course_id = c.course_id;


-- Select data from the created view STUDENT_COURSES_VIEW
SELECT * FROM STUDENT_COURSES_VIEW;

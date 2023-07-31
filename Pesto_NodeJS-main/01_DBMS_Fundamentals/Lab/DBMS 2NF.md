## Second Normal Form (2NF)

- In the 2NF, relational must be in 1NF.
- In the second normal form, all non-key attributes are fully functional dependent on the primary key

**Example:** Let's assume, a school can store the data of teachers and the subjects they teach. In a school, a teacher can teach more than one subject.

**TEACHER table**

| TEACHER_ID | SUBJECT   | TEACHER_AGE |
| ---------- | --------- | ----------- |
| 25         | Chemistry | 30          |
| 25         | Biology   | 30          |
| 47         | English   | 35          |
| 83         | Math      | 38          |
| 83         | Computer  | 38          |

In the given table, non-prime attribute TEACHER_AGE is dependent on TEACHER_ID which is a proper subset of a candidate key. That's why it violates the rule for 2NF.

To convert the given table into 2NF, we decompose it into two tables:

**TEACHER_DETAIL table:**

| TEACHER_ID | TEACHER_AGE |
| ---------- | ----------- |
| 25         | 30          |
| 47         | 35          |
| 83         | 38          |

**TEACHER_SUBJECT table:**

| TEACHER_ID | SUBJECT   |
| ---------- | --------- |
| 25         | Chemistry |
| 25         | Biology   |
| 47         | English   |
| 83         | Math      |
| 83         | Computer  |

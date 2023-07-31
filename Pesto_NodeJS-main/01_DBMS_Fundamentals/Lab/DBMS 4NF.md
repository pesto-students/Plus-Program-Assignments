## Fourth normal form (4NF)

- A relation will be in 4NF if it is in Boyce Codd normal form and has no multi-valued dependency.
- For a dependency A → B, if for a single value of A, multiple values of B exists, then the relation will be a multi-valued dependency.

### Example

**STUDENT**

| STU_ID | COURSE    | HOBBY   |
| ------ | --------- | ------- |
| 21     | Computer  | Dancing |
| 21     | Math      | Singing |
| 34     | Chemistry | Dancing |
| 74     | Biology   | Cricket |
| 59     | Physics   | Hockey  |

The given STUDENT table is in 3NF, but the COURSE and HOBBY are two independent entity. Hence, there is no relationship between COURSE and HOBBY.

In the STUDENT relation, a student with STU_ID, **21** contains two courses, **Computer** and **Math** and two hobbies, **Dancing** and **Singing**. So there is a Multi-valued dependency on STU_ID, which leads to unnecessary repetition of data.

So to make the above table into 4NF, we can decompose it into two tables:

**STUDENT_COURSE**

| STU_ID | COURSE    |
| ------ | --------- |
| 21     | Computer  |
| 21     | Math      |
| 34     | Chemistry |
| 74     | Biology   |
| 59     | Physics   |

**STUDENT_HOBBY**

| STU_ID | HOBBY   |
| ------ | ------- |
| 21     | Dancing |
| 21     | Singing |
| 34     | Dancing |
| 74     | Cricket |
| 59     | Hockey  |

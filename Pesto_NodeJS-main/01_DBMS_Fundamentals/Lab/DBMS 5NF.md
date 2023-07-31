## Fifth normal form (5NF)

- A relation is in 5NF if it is in 4NF and not contains any join dependency and joining should be lossless.
- 5NF is satisfied when all the tables are broken into as many tables as possible in order to avoid redundancy.
- 5NF is also known as Project-join normal form (PJ/NF).

### Example

| SUBJECT   | LECTURER | SEMESTER   |
| --------- | -------- | ---------- |
| Computer  | Anshika  | Semester 1 |
| Computer  | John     | Semester 1 |
| Math      | John     | Semester 1 |
| Math      | Akash    | Semester 2 |
| Chemistry | Praveen  | Semester 1 |

In the above table, John takes both Computer and Math class for Semester 1 but he doesn't take Math class for Semester 2. In this case, combination of all these fields required to identify a valid data.

Suppose we add a new Semester as Semester 3 but do not know about the subject and who will be taking that subject so we leave Lecturer and Subject as NULL. But all three columns together acts as a primary key, so we can't leave other two columns blank.

So to make the above table into 5NF, we can decompose it into three relations P1, P2 & P3:

**P1**

| SEMESTER   | SUBJECT   |
| ---------- | --------- |
| Semester 1 | Computer  |
| Semester 1 | Math      |
| Semester 1 | Chemistry |
| Semester 2 | Math      |

**P2**

| SUBJECT   | LECTURER |
| --------- | -------- |
| Computer  | Anshika  |
| Computer  | John     |
| Math      | John     |
| Math      | Akash    |
| Chemistry | Praveen  |

**P3**

| SEMSTER    | LECTURER |
| ---------- | -------- |
| Semester 1 | Anshika  |
| Semester 1 | John     |
| Semester 1 | John     |
| Semester 2 | Akash    |
| Semester 1 | Praveen  |

- A relation will be in 3NF if it is in 2NF and not contain any transitive partial dependency.
- 3NF is used to reduce the data duplication. It is also used to achieve the data integrity.
- If there is no transitive dependency for non-prime attributes, then the relation must be in third normal form.

A relation is in third normal form if it holds atleast one of the following conditions for every non-trivial function dependency X → Y.

1.  X is a super key.
2.  Y is a prime attribute, i.e., each element of Y is part of some candidate key.

**Example:**

**EMPLOYEE_DETAIL table:**

| EMP_ID | EMP_NAME  | EMP_ZIP | EMP_STATE | EMP_CITY |
| ------ | --------- | ------- | --------- | -------- |
| 222    | Harry     | 201010  | UP        | Noida    |
| 333    | Stephan   | 02228   | US        | Boston   |
| 444    | Lan       | 60007   | US        | Chicago  |
| 555    | Katharine | 06389   | UK        | Norwich  |
| 666    | John      | 462007  | MP        | Bhopal   |

**Super key in the table above:**

1.  {EMP_ID}, {EMP_ID, EMP_NAME}, {EMP_ID, EMP_NAME, EMP_ZIP}....so on

**Candidate key:** {EMP_ID}

**Non-prime attributes:** In the given table, all attributes except EMP_ID are non-prime.

Here, EMP_STATE & EMP_CITY dependent on EMP_ZIP and EMP_ZIP dependent on EMP_ID. The non-prime attributes (EMP_STATE, EMP_CITY) transitively dependent on super key(EMP_ID). It violates the rule of third normal form.

That's why we need to move the EMP_CITY and EMP_STATE to the new <EMPLOYEE_ZIP> table, with EMP_ZIP as a Primary key.

**EMPLOYEE table:**

| EMP_ID | EMP_NAME  | EMP_ZIP |
| ------ | --------- | ------- |
| 222    | Harry     | 201010  |
| 333    | Stephan   | 02228   |
| 444    | Lan       | 60007   |
| 555    | Katharine | 06389   |
| 666    | John      | 462007  |

**EMPLOYEE_ZIP table:**

| EMP_ZIP | EMP_STATE | EMP_CITY |
| ------- | --------- | -------- |
| 201010  | UP        | Noida    |
| 02228   | US        | Boston   |
| 60007   | US        | Chicago  |
| 06389   | UK        | Norwich  |
| 462007  | MP        | Bhopal   |

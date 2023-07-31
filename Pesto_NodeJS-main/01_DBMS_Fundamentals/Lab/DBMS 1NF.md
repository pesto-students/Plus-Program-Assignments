## First Normal Form (1NF)

- A relation will be 1NF if it contains an atomic value.
- It states that an attribute of a table cannot hold multiple values. It must hold only single-valued attribute.
- First normal form disallows the multi-valued attribute, composite attribute, and their combinations.

**Example:** Relation EMPLOYEE is not in 1NF because of multi-valued attribute EMP_PHONE.

**EMPLOYEE table:**

| EMP_ID     | EMP_NAME | EMP_PHONE   | EMP_STATE |
| ---------- | -------- | ----------- | --------- |
| 14         | John     | 7272826385, |
| 9064738238 | UP       |
| 20         | Harry    | 8574783832  | Bihar     |
| 12         | Sam      | 7390372389, |
| 8589830302 | Punjab   |

The decomposition of the EMPLOYEE table into 1NF has been shown below:

| EMP_ID | EMP_NAME | EMP_PHONE  | EMP_STATE |
| ------ | -------- | ---------- | --------- |
| 14     | John     | 7272826385 | UP        |
| 14     | John     | 9064738238 | UP        |
| 20     | Harry    | 8574783832 | Bihar     |
| 12     | Sam      | 7390372389 | Punjab    |
| 12     | Sam      | 8589830302 | Punjab    |

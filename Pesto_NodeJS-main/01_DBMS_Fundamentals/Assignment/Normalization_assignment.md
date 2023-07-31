## Question 1: Normalization
Consider the following unnormalized table for a bookstore database:


| Book ID | Title                 | Author          | Genre       | Publisher         | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley             | 978-0321976444 | 50.00  |
 
Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.

## [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | John Doe      | HR           | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Jane Smith    | Marketing    | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | Mike Johnson  | IT           | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | Mike Johnson  | IT           | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | Sarah Brown   | HR           | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Robert Lee    | Finance      | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | Lisa Wang     | IT           | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |


### Step-by-Step Guidelines:

### Step 1: First Normal Form (1NF)

Ensure each column contains atomic values.
Eliminate repeating groups.
Result: The table should not contain any repeating groups.
### Step 2: Second Normal Form (2NF)

Identify the primary key(s).
Eliminate partial dependencies.
Result: The table should be in 2NF with separate tables for each entity and its attributes.
### Step 3: Third Normal Form (3NF)

Remove transitive dependencies.
Result: The table should be in 3NF with separate tables for each relationship.
### Step 4: Fourth Normal Form (4NF)

Remove multi-valued dependencies.
Result: The table should be in 4NF with separate tables for independent multi-valued attributes.
### Step 5: Fifth Normal Form (5NF) [If Applicable]

Apply 5NF if the database has complex multi-valued relationships.
In some cases, 5NF may not be necessary, as it applies to certain complex databases. If 5NF is applicable, it usually deals with cases of lossless-join decompositions.

Note: The normalization process may involve additional steps and considerations depending on the complexity of the original table and the specific database design. Always aim to minimize redundancy, improve data integrity, and optimize the structure of the database.

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?
## Question 4: Explain the ACID properties in the context of database transactions.
## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?
## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.
## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.
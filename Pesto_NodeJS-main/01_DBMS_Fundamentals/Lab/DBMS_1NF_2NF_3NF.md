
Imagine we're building a restaurant management application. That application needs to store data about the company's employees and it starts out by creating the following table of employees:



**Modified Data (Not in 1NF):**

| EMPLOYEE_ID | NAME  | JOBS                                  | STATE_CODES              | HOME_STATES               |
|-------------|-------|--------------------------------------|--------------------------|---------------------------|
| E001        | Alice | J01 (Chef), J02 (Waiter)             | 26 (Michigan), 26 (Michigan) | Michigan, Michigan        |
| E002        | Bob   | J02 (Waiter), J03 (Bartender)        | 56 (Wyoming), 56 (Wyoming)   | Wyoming, Wyoming          |
| E003        | Alice | J01 (Chef)                           | 56 (Wyoming)                | Wyoming                   |

In this modified data, The "JOBS" column contains multiple job codes separated by commas, the "STATE_CODES" column contains multiple state codes separated by commas, and the "HOME_STATES" column contains multiple home states separated by commas.

This data is not in 1NF because it violates the rule that each column should contain only atomic (indivisible) values. Instead, it contains repeating groups, making it non-relational and not in 1NF.

### After converting into 1NF: Example of First Normal Form (1NF)

| employee\_id | name | job\_code | job | state\_code | home\_state |
| --- | --- | --- | --- | --- | --- |
| E001 | Alice | J01 | Chef | 26 | Michigan |
| E001 | Alice | J02 | Waiter | 26 | Michigan |
| E002 | Bob | J02 | Waiter | 56 | Wyoming |
| E002 | Bob | J03 | Bartender | 56 | Wyoming |
| E003 | Alice | J01 | Chef | 56 | Wyoming |

All the entries are atomic and there is a composite primary key (employee\_id, job\_code) so the table is in the **first normal form (1NF)**.

But even if you only know someone's `employee_id`, then you can determine their `name`, `home_state`, and `state_code` (because they should be the same person). This means `name`, `home_state`, and `state_code` are dependent on `employee_id` (a part of primary composite key). So, the table is not in **2NF**. We should separate them to a different table to make it 2NF.

### Example of Second Normal Form (2NF)

#### `employee_roles` Table

| employee\_id | job\_code |
| --- | --- |
| E001 | J01 |
| E001 | J02 |
| E002 | J02 |
| E002 | J03 |
| E003 | J01 |

#### `employees` Table

| employee\_id | name | state\_code | home\_state |
| --- | --- | --- | --- |
| E001 | Alice | 26 | Michigan |
| E002 | Bob | 56 | Wyoming |
| E003 | Alice | 56 | Wyoming |

#### `jobs` table

| job\_code | job |
| --- | --- |
| J01 | Chef |
| J02 | Waiter |
| J03 | Bartender |

`home_state` is now dependent on `state_code`. So, if you know the `state_code`, then you can find the `home_state` value.

To take this a step further, we should separate them again to a different table to make it 3NF.

### Example of Third Normal Form (3NF)

#### `employee_roles` Table

| employee\_id | job\_code |
| --- | --- |
| E001 | J01 |
| E001 | J02 |
| E002 | J02 |
| E002 | J03 |
| E003 | J01 |

#### `employees` Table

| employee\_id | name | state\_code |
| --- | --- | --- |
| E001 | Alice | 26 |
| E002 | Bob | 56 |
| E003 | Alice | 56 |

#### `jobs` Table

| job\_code | job |
| --- | --- |
| J01 | Chef |
| J02 | Waiter |
| J03 | Bartender |

#### `states` Table

| state\_code | home\_state |
| --- | --- |
| 26 | Michigan |
| 56 | Wyoming |

Now our database is in 3NF.


### Example of Fourth  Normal Form (4NF)

To apply Fourth Normal Form (4NF) to the given database, we need to check for multi-valued dependencies and ensure that there are no partial dependencies. In 4NF, we want to remove any multi-valued dependencies by creating separate tables for such dependencies. In this case, we need to focus on the `employees` and `states` tables, as they might have multi-valued dependencies.

**`employees` Table:**

| employee\_id | name  | state\_code |
| ------------ | ----- | ----------- |
| E001         | Alice | 26          |
| E002         | Bob   | 56          |
| E003         | Alice | 56          |

**`states` Table:**

| state\_code | home\_state |
| ----------- | ----------  |
| 26          | Michigan    |
| 56          | Wyoming     |

In this data, the `employees` table associates employees with their names and state codes, while the `states` table maps state codes to their corresponding home states. However, it's possible that an employee can have multiple home states (multi-valued dependency) if they have multiple records in the `employees` table.

To resolve this, we can create a new table that separates the multi-valued dependency between employees and their home states. Let's call this table `employee_home_states`:

**`employee_home_states` Table:**

| employee\_id | state\_code |
| ------------ | ----------- |
| E001         | 26          |
| E002         | 56          |
| E003         | 56          |

Now, we have eliminated the multi-valued dependency from the `employees` table, and it is in 4NF. The `employee_home_states` table represents the relationships between employees and their home states without redundancy.

The `employee_roles` and `jobs` tables remain the same as they do not have multi-valued dependencies or partial dependencies, and they are already in 4NF.
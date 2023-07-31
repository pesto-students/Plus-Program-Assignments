## Design Warehouse Database

In this assignment, you need to design and create a Warehouse Database. The database should include the following tables:

1. CITIES (CITY CHAR(20), STATE CHAR(20))
2. WAREHOUSES (WID INTEGER, WNAME CHAR(30), LOCATION CHAR(20), EXTRA CONTEXT json)
3. STORES (SID INTEGER, STORE_NAME CHAR(20), LOCATION_CITY CHAR(20))
4. CUSTOMER (CNO INTEGER, CNAME CHAR(50), ADDR VARCHAR(50), CU_CITY CHAR(20))
5. ORDERS (ONO INT, ODATE DATE)
6. ITEMS (ITEMNO INTEGER, DESCRIPTION TEXT, WEIGHT DECIMAL(5,2), COST DECIMAL(5,2))

Feel free to create more tables or add more columns to the tables if required. The table design should follow the following relationships between the tables:

- CITIES - WAREHOUSES: 1 to Many (1:M)
- WAREHOUSES - STORES: 1 to Many (1:M)
- CUSTOMER - ORDERS: 1 to Many (1:M)
- ITEMS - ORDERS: Many to Many (M:M) relationship with a descriptive attribute "ordered_quantity"
- STORES - ITEMS: Many to Many (M:M) relationship with a descriptive attribute "quantity"

**Queries to Solve:**

1. Find the item that has the minimum weight.
2. Find the different warehouses in "Pune".
3. Find the details of items ordered by a customer named "Mr. Patil".
4. Find a Warehouse that has the maximum number of stores.
5. Find an item that is ordered for a minimum number of times.
6. Find the detailed orders given by each customer.

**Submission Requirements:**

- Submit 2 SQL files: One for the DB schema and another for SQL queries.
- Upload all assignment-related files to Git.
- Attach screenshots from your server

Please create the necessary SQL files to implement the database schema and write the queries to solve the mentioned problems. Good luck with your assignment!
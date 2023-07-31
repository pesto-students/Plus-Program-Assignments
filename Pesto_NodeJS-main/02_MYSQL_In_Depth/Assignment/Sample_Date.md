Below is the sample data that you can use to insert into the tables of the Warehouse Database:

**Sample Data for CITIES table:**

| CITY     | STATE      |
|----------|------------|
| Pune     | Maharashtra|
| Mumbai   | Maharashtra|
| Delhi    | Delhi      |
| Bangalore| Karnataka  |
| Chennai  | Tamil Nadu |

**Sample Data for WAREHOUSES table:**

| WID | WNAME           | LOCATION         | EXTRA                  |
|-----|-----------------|------------------|------------------------|
| 1   | Warehouse A     | Pune             | {"capacity": 1000}     |
| 2   | Warehouse B     | Mumbai           | {"capacity": 800}      |
| 3   | Warehouse C     | Delhi            | {"capacity": 1200}     |
| 4   | Warehouse D     | Bangalore        | {"capacity": 900}      |

**Sample Data for STORES table:**

| SID | STORE_NAME      | LOCATION_CITY    |
|-----|-----------------|------------------|
| 1   | Store 1         | Pune             |
| 2   | Store 2         | Mumbai           |
| 3   | Store 3         | Pune             |
| 4   | Store 4         | Delhi            |

**Sample Data for CUSTOMER table:**

| CNO | CNAME           | ADDR                | CU_CITY       |
|-----|-----------------|---------------------|---------------|
| 101 | Mr. Patil       | 123 Main St        | Pune          |
| 102 | Mrs. Sharma     | 456 Central Ave    | Mumbai        |
| 103 | Mr. Singh       | 789 1st Street     | Delhi         |
| 104 | Ms. Gupta       | 101 Second Road    | Bangalore     |
| 105 | Mr. Kumar       | 456 Third Avenue   | Chennai       |

**Sample Data for ORDERS table:**

| ONO | ODATE       |
|-----|-------------|
| 1   | 2023-06-15  |
| 2   | 2023-06-16  |
| 3   | 2023-06-17  |
| 4   | 2023-06-18  |
| 5   | 2023-06-19  |

**Sample Data for ITEMS table:**

| ITEMNO | DESCRIPTION                     | WEIGHT | COST    |
|--------|---------------------------------|--------|---------|
| 101    | Laptop                          | 2.5    | 1200.50 |
| 102    | Smartphone                      | 0.5    | 800.00  |
| 103    | TV                              | 15.0   | 1000.00 |
| 104    | Microwave Oven                  | 10.0   | 500.00  |
| 105    | Refrigerator                    | 25.0   | 1500.00 |
| 106    | Washing Machine                 | 30.0   | 1800.00 |

You can use the provided sample data to insert into the respective tables of the Warehouse Database. Make sure to create the tables and their relationships before inserting the data.
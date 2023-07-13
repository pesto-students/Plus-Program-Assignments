## Problem Statement:
Cuckoo Hashing

## Problem Statement:
Implement the Cuckoo Hashing algorithm using 
JavaScript. Cuckoo Hashing is a hashing technique 
that resolves collisions by using multiple hash functions
and alternate placements of elements in different hash tables.


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter a series of key-value 
pairs. Each key-value pair is entered on a new line, 
where the key and value are separated by a space.

## Output Format:
The program should display the hash 
tables after performing the Cuckoo 
Hashing algorithm.

## Test Case 1:
sample Input:
- 12 apple
- 43 banana
- 15 orange
- 27 mango
- 37 pineapple

Sample Output:
HashTable 1:
- 15 orange
- 27 mango

HashTable 2:
- 12 apple
- 43 banana
- 37 pineapple

## Test Case 2:
Saample input:
- 1 apple
- 2 banana
- 3 orange
- 4 mango
- 5 pineapple

Sample output:
HashTable 1:
- 1 apple
- 4 mango

HashTable 2:
- 2 banana
- 3 orange
- 5 pineapple

## Level: Hard

## Hints:
- Cuckoo Hashing involves using two hash tables and two hash functions.
Start by creating two empty hash tables.
Hash the keys using the two hash functions and try to place them in the respective hash tables.

- If a collision occurs, replace the existing element and move the displaced element to the other hash table.
Repeat this process until all elements are successfully placed in the hash tables or until a maximum number of iterations is reached.

## Approach:
- Initialize two empty hash tables, hashTable1 and hashTable2.
- Define two hash functions, hashFunction1 and hashFunction2, which hash the keys to different indices in the hash tables.
- Start iterating through the key-value pairs entered by the user.
- For each key-value pair, calculate the hash values using hashFunction1 and hashFunction2.
- Check if the corresponding indices in both hash tables are empty. If yes, place the key-value pair in the respective hash table.
- If any of the indices is occupied, replace the existing element with the new key-value pair.
- Move the displaced element to the other hash table and repeat steps 4-6.
- Continue this process until all key-value pairs are successfully placed or until a maximum number of iterations is reached.
- Display the contents of both hash tables.

## Problem Statement:
Check for Duplicates using Hashing

## Problem Statement:
Implement a function that takes an array of integers 
as input and checks if there are any duplicate elements 
using hashing.


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter a series of integers
separated by spaces.



## Output Format:
The program should display whether
there are any duplicate elements in 
the array.

## Test Case 1:
sample Input
1 2 3 4 5 1

Sample Output
There are duplicate elements in the array.

## Test Case 2:
Sample input: 
10 20 30 40 50

Sample output:
There are no duplicate elements in the array

## Level: Easy

## Hints:
- Use a hash table to keep track of the frequency 
of each element.
- Iterate through the array and check if the element
already exists in the hash table.
If an element is found to be already present in 
the hash table, it is a duplicate.


## Approach:
- Create an empty hash table.
- Split the input string by spaces to get an array of integers.
- Iterate through each element in the array.
- For each element, check if it already exists in the hash table.
- If the element is already present, it is a duplicate. Display a message and exit.
- If the element is not present, add it to the hash table.
- If all elements have been checked without finding any duplicates, display a message indicating no duplicates were found.

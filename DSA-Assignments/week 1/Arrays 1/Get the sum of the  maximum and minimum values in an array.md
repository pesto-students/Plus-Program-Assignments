## Problem Statement:
Get the sum of the maximum and minimum values in an array

## Problem Statement:
Write a function to return the sum of max and 
min values in an array. 


## Input Format:
Comma separated Numbers representing the elements of an array

## Output Format:
A number

## Test Case 1:
Example input:
5 2 9 1 7

Example output:
10

## Test Case 2:
Example input:
-10 0 100 -50 20

Example output:
90

## Level: Easy

## Hints:
- Think about how you can find the maximum and minimum values in the array.
Initialize variables to keep track of the maximum and minimum values while iterating through the array.
- After finding the maximum and minimum values, return their sum.

## Approach:
- Convert the user input string of space-separated numbers into an array.
- Initialize max and min variables to the first element of the array.
- Iterate through the remaining elements of the array.
- For each element, update the max and min values if necessary.
- After iterating through the entire array, return the sum of max and min.


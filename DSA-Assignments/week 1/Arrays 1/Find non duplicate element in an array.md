## Problem Statement:
Find non duplicate element in an array.

## Problem Statement:
Write a function that takes an array of integers as 
input and returns the non-duplicate element in the 
array. It is guaranteed that there is exactly one 
element that does not have a duplicate in the array.


## Input Format:
- The input is taken as a prompt from the user. 
- The user is prompted to enter the array elements 
separated by spaces.

## Output Format:
The function should return the 
non-duplicate element in the array.

## Test Case 1:
Sample Input:
5 2 3 2 5

Sample Output:
3

## Test Case 2:
Example input:
-1 -1 -2 -2 -3

Example output:
-3

## Level: Medium

## Hints:
- Think about how you can identify the elements 
that have duplicates.
- Consider using a data structure to keep track 
of the frequency of each element in the array.
After identifying the non-duplicate element, return it.

## Approach:
- Convert the user input string of space-separated numbers into an array.
Initialize an empty object frequency to keep track of the frequency of each element.
Iterate through the array and update the frequency of each element in the frequency object.
Iterate through the array again and find the element that has a frequency of 1.
Return the non-duplicate element.


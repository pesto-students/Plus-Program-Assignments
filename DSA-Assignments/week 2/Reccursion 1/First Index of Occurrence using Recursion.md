## Problem Statement:
First Index of Occurrence using Recursion

## Problem Statement:
Given an array of integers and a target value, write a recursive function to find the first index of occurrence of the target value in the array.


## Input Format:
The input will be an array of integers and a target value.

## Output Format:
The output will be an integer representing the first index of occurrence. If the target value is not found in the array, return -1.

## Test Case 1:
Sample Input:
1 2 3 4 5
5

Sample Output:
2


## Test Case 2:
Sample input:
2 4 6 8 10
5

Sample output:
-1

## Level: Hard

## Hints:
- Use recursion to search for the target value in the array.
At each step, compare the current element with the target value.
- If they are equal, return the current index.
If they are not equal, make a recursive call on the remaining subarray.

## Approach:
- Parse the input string and convert it into an array of integers.
- Define a recursive function that searches for the target value in the array.
- In the recursive function, if the current element is equal to the target value, return the current index.
- If the current index is equal to the length of the array, return -1 to indicate that the target value was not found.
- Otherwise, make a recursive call on the remaining subarray, starting from the next index.
- Return the result of the recursive call.

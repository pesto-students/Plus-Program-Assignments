## Problem Statement:
Array Sum using Recursion

## Problem Statement:
Write a recursive function to calculate the sum of all 
elements in an array.


## Input Format:
The input is an array of integers.

## Output Format:
The function should return the sum of 
all elements in the array.

## Test Case 1:
Sample Input:
[1, 2, 3, 4, 5]

Sample Output:
15

## Test Case 2:
Sample input:
[0, 0, 0, 0, 0]

Sample output:
0

## Level: Easy

## Hints:
- Recursion involves breaking down a problem into smaller subproblems.
Think about how you can break down the array into smaller parts to calculate the sum.   
- Consider the base case when the array is empty.

## Approach:
- Define a recursive function that takes an array as input.
- Check if the array is empty. If so, return 0 as the sum (base case).
- Otherwise, extract the first element of the array and add it to the sum of the remaining elements obtained by calling the recursive function on the rest of the array.
- Return the result.

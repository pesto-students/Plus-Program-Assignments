## Problem Statement:
Maximum Product Subarray - Contiguous Subarray with the Largest Product

## Problem Statement:
Write a program to find the contiguous subarray within an array of integers that has the largest product. Your task is to calculate the maximum product of the subarray.

## Input Format:
The user is prompted to enter an array of integers, separated by spaces.


## Output Format:
The program prints the maximum product subarray.


## Test Case 1:
Sample Input:
2 3 -2 4

Sample Output:
6

## Test Case 2:
sample input: 
-2 3 -4

sample output:
24

## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Keep track of both the maximum and minimum products seen so far, as a negative number multiplied by a negative number can become the maximum product.
- Iterate through the array and update the maximum and minimum products at each step.
Update the result if necessary.
Return the maximum product.

## Approach:
- Take input from the user as a space-separated array of integers.
- Parse the input into an array of integers.
- Implement the maxProductSubarray function that takes the array of integers as input.
- Initialize variables maxProduct, minProduct, and result to store the maximum and minimum products seen so far and the final result, respectively.
- Iterate through the array starting from the second element.
- If the current number is negative, swap the maximum and minimum products.
- Update the maximum and minimum products by comparing the current number with the product of the previous maximum/minimum product and the current number.
- Update the result by comparing it with the current maximum product.
- Return the maximum product as the result.
- Print the maximum product subarray.

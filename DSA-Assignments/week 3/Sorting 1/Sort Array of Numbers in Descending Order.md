## Problem Statement:
Sort Array of Numbers in Descending Order

## Problem Statement:
Write a JavaScript function that takes an array of numbers as input and sorts it in descending order using the Quick Sort algorithm. Implement the function with the name quickSort.


## Input Format:
Prompt the user to enter the numbers as a space-separated string.


## Output Format:
The sorted array of numbers in descending order, printed as a space-separated string.


## Test Case 1:
Sample Input:
64 34 25 12 22 11 90

Sample Output:
90 64 34 25 22 12 11


## Test Case 2:
sample input: 
5 10 15 20 25

sample output:
25 20 15 10 5

## Level: Medium

## Hints:
- The Quick Sort algorithm follows the divide-and-conquer approach.
Choose a pivot element from the array (e.g., the last element).
- Partition the array into two sub-arrays: one with elements greater than the pivot and one with elements less than the pivot.
Recursively apply Quick Sort on the sub-arrays until the entire array is sorted.

## Approach:
- Select a pivot element from the array. In this case, we choose the last element as the pivot.
- Partition the array into two sub-arrays: one with elements greater than the pivot and one with elements less than the pivot.
- Recursively apply Quick Sort on the sub-arrays.
- Combine the sorted sub-arrays and the pivot to get the final sorted array.

## Problem Statement:
All Indices in Array using Recursion


## Problem Statement:
Given an array and a target element, write a recursive function to find all the indices of the target element in the array.


## Input Format:
The input will consist of an array of integers and a target integer.

## Output Format:
The output will be an array of integers representing the indices of the target element in the input array.

## Test Case 1:
Sample Input:
- [1, 2, 3, 2, 4, 2, 5]
- 2

Sample Output:
[1, 3, 5]

## Test Case 2:
sample input: 
- [1, 1, 1, 1, 1]
- 1

sample output:
[0, 1, 2, 3, 4]


## Level: Easy

## Hints:
- Define a recursive function that takes an array, a target element, and an index as parameters.
If the index is equal to the length of the array, return an empty array.
Otherwise, make a recursive call on the remaining array with the next index.
- If the current element is equal to the target element, add the current index to the result.
Combine the result of the recursive call with the current index (if applicable).
Return the combined result.

## Approach:
- Define a recursive function that takes an array, a target element, and an index as parameters.
- If the index is equal to the length of the array, return an empty array.
- Otherwise, make a recursive call on the remaining array with the next index.
- If the current element is equal to the target element, add the current index to the result.
- Combine the result of the recursive call with the current index (if applicable).
- Return the combined result.

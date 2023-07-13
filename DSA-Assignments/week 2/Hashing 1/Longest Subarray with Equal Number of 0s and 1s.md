## Problem Statement:
Longest Subarray with 
Equal Number of 0s and 1s

## Problem Statement:
Write a function that takes an array of 0s and 1s as 
input and finds the length of the longest subarray 
that contains an equal number of 0s and 1s.


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter the array elements 
separated by spaces.

## Output Format:
The function should return the length 
of the longest subarray with an equal 
number of 0s and 1s.

## Test Case 1:
sample Input
0 1 0 1 1 0 0

Sample Output
6

## Test Case 2:
Example input:
1 0 1 0 1 0 1

Example output:
6

## Level: Easy

## Hints:
- Think about how you can keep track of the 
difference between the count of 0s and 1s.
- Consider using a hashmap to store the difference 
as the key and the index as the value.
Keep track of the maximum length encountered 
so far while iterating through the array.

## Approach:
- Convert the user input string of space-separated numbers into an array of integers.
- Initialize a hashmap diffMap to keep track of the difference between the count of 0s and 1s and the corresponding index.
- Initialize a variable maxLen to store the maximum length encountered so far.
- Initialize a variable diff to keep track of the difference.
- Iterate through the array and update the diff value based on the current element (increment for 1 and decrement for 0).
- If diff is 0, update maxLen to the current index + 1 (since the subarray from index 0 to the current index has an equal number of 0s and 1s).
- If diff is already present in diffMap, update maxLen to the maximum value between maxLen and the difference in indices between the current index and the index stored in diffMap[diff].
- If diff is not present in diffMap, store it as the value in diffMap with the current index as the key.
Return maxLen.

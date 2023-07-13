## Problem Statement:
Longest Consecutive Subsequence

## Problem Statement:
Write a function that takes an array of integers as 
input and finds the length of the longest consecutive 
subsequence in the array. A consecutive subsequence
is a sequence of numbers that appear consecutively 
in the array (without gaps).


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter the array elements
separated by spaces.

## Output Format:
The function should return the length 
of the longest consecutive subsequence
in the array.

## Test Case 1:
sample Input
100 4 200 1 3 2

Sample Output
4

## Test Case 2:
Example input:
10 5 7 3 4 8 9

Example output:
5

## Level: Easy

## Hints:
- Think about how you can use hashing to efficiently
determine the length of a consecutive subsequence.
Consider using a set or a hashmap to store the 
elements of the array for quick lookup.

- Iterate through the array and for each element, 
check if the previous consecutive element exists
in the set. If it does, it means the current element 
is not the start of a subsequence.

For each element that is the start of a subsequence, 
keep track of the maximum length encountered so far.

## Approach:
- Convert the user input string of space-separated numbers into an array of integers.
- Initialize a set numsSet and add all the elements from the array to the set.
- Initialize a variable maxLength to store the maximum length encountered so far.
- Iterate through the array and for each element num, check if num-1 exists in the numsSet.
- If num-1 does not exist, it means num is the start of a subsequence.
- Initialize a variable length to 1 and increment num by 1.
- While num exists in the numsSet, increment length and num by 1.
- Update maxLength to the maximum value between maxLength and length.
- Return maxLength.

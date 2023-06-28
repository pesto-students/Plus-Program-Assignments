## Problem Name:
Is Target Value Present

## Problem Statement:
You are given a sorted array of integers and a 
target value. Write a function to determine if the 
target value is present in the array. If it is, return 
true; otherwise, return false.


## Input Format:
The input consists of two lines:

The first line contains space-separated 
integers representing the elements of 
the sorted array.

The second line contains a single 
integer representing the target value.

## Output Format:
A single line containing 
either "true" if the target 
value is present in the 
array, or "false" if it is not.

## Test Case 1:
Sample Input:
1 3 5 7 9
5

Sample Output:
true

## Test Case 2:
Sample input:
1 2 3 4 5
3

Sample output:
true

## Level: Easy

## Hints:
- Think about utilizing binary search to efficiently 
find the target value.
- Consider the properties of a sorted array and 
how they can help in the search process.

## Approach:
Read the sorted array and target value from input.
Initialize two pointers, "low" and "high," representing the start and end indices of the 
array.
While "low" is less than or equal to "high":
a. Calculate the middle index as the average of "low" and "high".
b. If the middle element is equal to the target value, return true.
c. If the middle element is less than the target value, update "low" to middle + 1.
d. If the middle element is greater than the target value, update "high" to middle - 1.
If the loop completes without finding the target value, return false.
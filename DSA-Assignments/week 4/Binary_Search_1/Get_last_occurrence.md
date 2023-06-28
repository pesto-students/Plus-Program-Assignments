## Problem Name:
Get last occurrence

## Problem Statement:
You are given a sorted array of integers and a 
target value. Write a function to find the last 
occurrence of the target value in the array. If the 
target value is not present, return -1.


## Input Format:
The input consists of two lines:

The first line contains space-separated 
integers representing the elements of the 
sorted array.
The second line contains a single integer 
representing the target value.

## Output Format:
A single line containing 
either the index of the last 
occurrence of the target 
value if it is present, or -1 
if it is not.

## Test Case 1:
Sample Input:
1 2 3 3 5
3

Sample Output:
3

## Test Case 2:
Sample input:
1 2 3 4 
10

Sample output:
-1

## Level: Easy

## Hints:
- Use a modified binary search to find the last 
occurrence of the target value.
- Update the search range to the right side if the
 middle element is equal to the target.

## Approach:
Read the sorted array and target value from input.
Initialize two pointers, "low" and "high," representing the start and end indices of 
the array.
While "low" is less than or equal to "high":
a. Calculate the middle index as the average of "low" and "high".
b. If the middle element is equal to the target value:
If the middle element is the last occurrence (next element is greater or the index is at 
the end), return the middle index.
Otherwise, update "low" to middle + 1.
c. If the middle element is less than the target value, update "low" to middle + 1.
d. If the middle element is greater than the target value, update "high" to middle - 1.
If the loop completes without finding the target value, return -1.
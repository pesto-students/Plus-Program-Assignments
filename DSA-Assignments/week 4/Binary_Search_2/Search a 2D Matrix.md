## Problem Name:
Search a 2D Matrix

## Problem Statement:
Write an efficient algorithm that searches for a value 
in an m x n matrix. The matrix has the following 
properties:

Integers in each row are sorted in ascending order 
from left to right.
The first integer of each row is greater than the last 
integer of the previous row.


## Input Format:
The first line contains two integers m and n, 
representing the number of rows and columns
 in the matrix, respectively.
The next m lines contain n space-separated 
integers representing the elements of the matrix.
The last line contains an integer target, 
representing the value to search.

## Output Format:
A boolean value indicating 
whether the value is 
present in the matrix.

## Test Case 1:
Sample Input:
3 4
1 3 5 7
10 11 16 20
23 30 34 60
13

Sample Output
false

## Test Case 2:
Sample input:
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13

Sample output:
false

## Level: Medium

## Hints:
- Since the rows are sorted and the first integer of
 each row is greater than the last integer of the 
previous row, you can consider the matrix as a 
flattened sorted array.

- Apply the binary search algorithm to search for 
the target value in the flattened array.
Map the indices of the flattened array to the 
corresponding row and column indices in the 
matrix to determine the presence of the target 
value.

## Approach:
Read the input values from the user.
Implement a binary search approach to search for the target value in the matrix:
Flatten the m x n matrix into a 1D sorted array.
Initialize the start pointer as 0 and the end pointer as m x n - 1.
While start is less than or equal to end:
Calculate the middle element index as mid = Math.floor((start + end) / 2).
Map the mid index to the corresponding row and column indices as row 
= Math.floor(mid / n) and col = mid % n.
If the matrix element at row and col is equal to the target, return true.
If the matrix element at row and col is greater than the target, move the end pointer 
to mid - 1.
If the matrix element at row and col is less than the target, move the start pointer to 
mid + 1.
If the target is not found, return false.
## Problem Name:
K-th Element of Two Sorted Arrays

## Problem Statement:
Given two sorted arrays arr1 and arr2 of sizes m 
and n respectively, find the K-th smallest element 
among the combined elements of both arrays.


## Input Format:
The first line contains the elements of arr1, separated by spaces.
The second line contains the elements of arr2, separated by spaces.
The third line contains the value of K.

## Output Format:
The K-th smallest element among the combined elements of arr1 and arr2.

## Test Case 1:
Sample Input:
2 4 6 8 10
1 3 5 7 9 11
5

Sample Output:
5

## Test Case 2:
Sample input:
1 2 3 4 5
6 7 8 9 10
7

Sample output:
7

## Level: Hard

## Hints:
- Since the arrays are sorted, you can use binary
search to find the K-th element efficiently.

- Think about how you can divide the search 
space based on the K-th element's position 
in the combined arrays.

## Approach:
Initialize variables left and right as the minimum and maximum possible values for the K-th element.
Perform binary search on the search space until left becomes greater than right.
Calculate the mid index as (left + right) / 2.
Count the number of elements in arr1 and arr2 that are less than or equal to the mid element.
If the count is less than K, update left = mid + 1 to search the right half.
If the count is greater than or equal to K, update right = mid - 1 to search the left half.
Repeat steps 3-6 until left becomes greater than right.
Return left as the K-th smallest element.
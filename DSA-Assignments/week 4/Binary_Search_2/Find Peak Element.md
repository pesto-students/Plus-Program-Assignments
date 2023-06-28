## Problem Name:
Find Peak Element

## Problem Statement:
A peak element in an array is an element that is 
greater than its neighbors. Given an input array 
nums, where nums[i] ≠ nums[i+1], find a peak 
element and return its index. The array may contain 
multiple peaks; in that case, return the index of any 
peak element.


## Input Format:
The first line contains an integer n, 
representing the size of the array nums.

The next line contains n space-separated 
integers representing the elements of 
nums.

The first line contains space-separated 
integers representing the elements of the 
sorted array.
The second line contains a single integer 
representing the target value.

## Output Format:
An integer representing the index of any peak element.

## Test Case 1:
Sample Input:
6
1 2 1 3 5 6 4

Sample Output:
1

## Test Case 2:
Sample input:
4
1 2 3 4 5

Sample output:
4

## Level: Easy

## Hints:
- Consider using the binary search approach to 
find the peak element efficiently.
Analyze the relationship between a mid element 
and its adjacent elements to determine the 
direction to move towards the peak.

- Carefully handle the boundary conditions to 
avoid index out of bounds errors.
Think about how the binary search can be 
adapted to find a peak element in the array.

## Approach:
Read the input values from the user.
Implement a binary search approach to find the peak element:
Initialize the start and end variables as 0 and the length of nums minus 1, respectively.
While start is less than or equal to end:
Calculate the middle value as (start + end) / 2.
If the middle element is greater than both its adjacent elements (nums[middle] > nums[middle - 1] and nums[middle] > nums[middle + 1]), return the middle index as a peak element.
If the middle element is smaller than its next element (nums[middle] < nums[middle + 1]), update the start variable to middle + 1 to search in the increasing part of the array.
Otherwise, update the end variable to middle - 1 to search in the decreasing part of the array.
Return -1 if no peak element is found.
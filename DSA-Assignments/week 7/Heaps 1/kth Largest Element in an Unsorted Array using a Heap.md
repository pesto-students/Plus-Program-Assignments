## Problem Statement:
kth Largest Element in an Unsorted Array using a Heap

## Problem Statement:
Given an unsorted array of integers, write a function to find the kth largest element in the array using a heap.

## Input Format:
The user is prompted to enter the elements of the array, separated by commas.
The user is prompted to enter the value of k.

## Output Format:
The program prints the kth largest element in the array.

## Test Case 1:
Sample Input:
- 5, 2, 9, 1, 7
- 2

Sample Output:
7

## Test Case 2:
sample input: 
- 10,6,3,8,1,4
- 4

sample output:
4

## Level: Medium

## Hints:
- Build a min heap of the first k elements in the array.
Iterate over the remaining elements in the array.
- If the current element is larger than the root of the min heap, replace the root with the current element and heapify down.
The kth largest element will be the root of the min heap.

## Approach:
- Take input from the user as an array of elements and the value of k.
- Implement the findKthLargest function that takes the array and k as input.
- Build a min heap of the first k elements using the buildMinHeap function.
- Iterate over the remaining elements in the array from index k.
- If the current element is larger than the root of the min heap, replace the root with the current element and perform heapify down using the heapify function.
- After iterating over all the elements, the kth largest element will be the root of the min heap.
- Return the kth largest element.
- Print the kth largest element.

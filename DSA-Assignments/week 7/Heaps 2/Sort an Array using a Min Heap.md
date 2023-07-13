## Problem Statement:
Sort an Array using a Min Heap

## Problem Statement:
Write a program to sort an array of integers using a min heap. The array can contain both positive and negative integers. The program should use a min heap data structure to efficiently sort the array in ascending order.


## Input Format:
The user is prompted to enter the elements of the array, separated by spaces.


## Output Format:
The program prints the sorted array, with elements separated by spaces.


## Test Case 1:
Sample Input:
5 2 9 1 7

Sample Output:
1 2 5 7 9

## Test Case 2:
sample input: 
10 6 3 8 1 4

sample output:
1 3 4 6 8 10

## Level: Easy

## Hints:
- Build a min heap using the elements of the array.
Extract the minimum element from the heap and place it in the sorted portion of the array
- Repeat the extraction process until the array is sorted.

## Approach:
- Take input from the user as elements of the array, separated by spaces.
- Implement the sortArray function that takes the array as input.
- Build a min heap using the buildMinHeap function.
- Extract the minimum element from the heap and place it in the sorted portion of the array.
- Repeat the extraction process until the array is sorted.
- Return the sorted array as the output.
- Print the sorted array.

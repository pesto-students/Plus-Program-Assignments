## Problem Statement:
Sort Array of Strings by Length in Descending Order


## Problem Statement:
Write a JavaScript function that takes an array of strings as input and sorts it in descending order based on the length of the strings using the Heap Sort algorithm. Implement the function with the name heapSort.


## Input Format:
Prompt the user to enter the strings as a comma-separated string.


## Output Format:
Print each string in the sorted array on a new line.


## Test Case 1:
Sample Input:
apple,banana,pear,orange,kiwi

Sample Output:
banana
orange
apple
pear
kiwi


## Test Case 2:
sample input: 
red,yellow,green,blue

sample output:
yellow
green
blue
red

## Level: Medium

## Hints:
- Heap Sort is an in-place sorting algorithm that builds a binary heap and repeatedly extracts the maximum element from it.
- Modify the standard heapify procedure to consider the length of strings instead of numerical values.

## Approach:
- Convert the comma-separated string of strings into an array of strings.
- Build a max-heap based on the lengths of the strings.
- Swap the root node (maximum) with the last node and reduce the heap size by one.
- Heapify the reduced heap to maintain the max-heap property.
- Repeat steps 3-4 until the heap is empty.
- Reverse the resulting sorted array to obtain descending order.

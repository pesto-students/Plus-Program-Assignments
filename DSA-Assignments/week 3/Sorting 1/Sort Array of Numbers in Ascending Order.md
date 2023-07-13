## Problem Statement:
Sort Array of Numbers in Ascending Order

## Problem Statement:
Write a JavaScript function that takes an array of numbers as input and sorts it in ascending order using the Bubble Sort algorithm. Implement the function with the name bubbleSort.


## Input Format:
Prompt the user to enter the numbers as a space-separated string.

## Output Format:
The sorted array of numbers in ascending order, printed as a space-separated string.

## Test Case 1:
Sample Input:
64 34 25 12 22 11 90

Sample Output:
11 12 22 25 34 64 90


## Test Case 2:
sample input: 
7 4 3 8 2 6 1 5

sample output:
1 2 3 4 5 6 7 8

## Level: Easy

## Hints:
- The Bubble Sort algorithm works by repeatedly swapping adjacent elements if they are in the wrong order.
- Use a nested loop to compare adjacent elements and swap them if necessary.
After each pass through the array, the largest element will "bubble" to the end, so you can reduce the inner loop range accordingly.

## Approach:
- Start with the first element as the current element.
- Compare the current element with the next element, and if it is greater, swap them.
- Move to the next element and repeat step 2 until the end of the array is reached.
- After the first pass, the largest element will be at the end.
- Reduce the range of the inner loop by one and repeat steps 2-4 until the array is sorted.

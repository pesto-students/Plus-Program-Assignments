## Problem Statement:
kth Smallest Element in a Row-wise and Column-wise

## Problem Statement:
Find the kth Smallest Element in a Row-wise and Column-wise Sorted Matrix using a Min Heap

## Input Format:
The user is prompted to enter the number of rows and columns of the matrix.
For each row, the user is prompted to enter the elements separated by commas.
The user is prompted to enter the value of k.

## Output Format:
The program prints the kth smallest element in the matrix.


## Test Case 1:
Sample Input:
- 3
- 3
- 1,3,5
- 2,4,7
- 6,8,9
- 3

Sample Output:
3

## Test Case 2:
sample input: 
- 2
- 4
- 2,4,7,9
- 3,5,8,10
- 6

sample output:
7

## Level: Hard

## Hints:
- Create a min heap to track the smallest elements from each row.
Insert the first element from each row into the heap along with their respective row and column indices.
Build the min heap using the buildMinHeap function.
- Extract the kth smallest element from the heap by repeatedly extracting the smallest element and replacing it with the next element in the same row (if available) or removing it from the heap.
The kth smallest element will be the result.

## Approach:
- Take input from the user for the number of rows, number of columns, matrix elements, and the value of k.
- Implement the findKthSmallest function that takes the matrix and k as input.
- Create an empty min heap.
- Iterate over each row of the matrix and insert the first element from each row into the heap along with their respective row and - - column indices.
- Build the min heap using the buildMinHeap function.
- Extract the kth smallest element from the heap by repeatedly extracting the smallest element and replacing it with the next - - - element in the same row (if available) or removing it from the heap.
- Return the kth smallest element as the result.
- Print the kth smallest element.

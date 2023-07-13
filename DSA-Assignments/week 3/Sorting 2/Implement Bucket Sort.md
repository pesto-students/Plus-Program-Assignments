## Problem Statement:
Implement Bucket Sort

## Problem Statement:
Implement the Bucket Sort algorithm to sort an array of numbers in such a way that even numbers come first, followed by odd numbers, both in ascending order


## Input Format:
The user is prompted to enter numbers separated by spaces.


## Output Format:
The sorted array of numbers is printed to the console, separated by spaces.


## Test Case 1:
Sample Input:
4 2 6 9 7 5

Sample Output:
2 4 6 5 7 9



## Test Case 2:
sample input: 
9 8 7 6 5 4 3 2 1

sample output:
2 4 6 8 1 3 5 7 9


## Level: Medium

## Hints:
- Create two empty arrays to hold even numbers and odd numbers.
Iterate through the input array and distribute each number into the appropriate bucket.
- Sort the numbers in each bucket using any sorting algorithm.
Concatenate the sorted even and odd buckets to get the final sorted array.

## Approach:
- Create two empty arrays: one for even numbers and one for odd numbers.
- Iterate through the input array and distribute each number into the appropriate bucket based on its parity.
- Sort the numbers in each bucket using a sorting algorithm of your choice.
- Concatenate the sorted even and odd buckets to obtain the final sorted array.
- Print the sorted array.


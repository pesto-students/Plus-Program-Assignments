## Problem Statement:
Power Set using Recursion

## Problem Statement:
Given a set of distinct integers, write a function to 
generate all possible subsets (power set) using recursion.


## Input Format:
The input will be a string of space-separated
distinct integers.

## Output Format:
The output will be an array of arrays, 
representing all possible subsets.

## Test Case 1:
Sample Input:
1 2 3

Sample Output:
[ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]


## Test Case 2:
Sample input:
4 7 1 9

Sample output:
[ [], [ 4 ], [ 7 ], [ 4, 7 ], [ 1 ], [ 4, 1 ], [ 7, 1 ], [ 4, 7, 1 ], [ 9 ], [ 4, 9 ], [ 7, 9 ], [ 4, 7, 9 ], [ 1, 9 ], [ 4, 1, 9 ], [ 7, 1, 9 ], [ 4, 7, 1, 9 ] ]

## Level: Medium

## Hints:
- Use recursion to generate subsets of smaller sizes.
At each step, either include or exclude the current element to generate subsets.
- Base case: An empty set will have one subset - the empty set itself.

## Approach:
- Parse the input string and convert it into an array of integers.
- Create an empty array to store the power set.
- Define a recursive function that generates subsets of the given set.
- In the recursive function, if the current subset is of the desired size, add it to the power set array.
- Otherwise, make two recursive calls, one by including the current element and one by excluding it.
- Return the power set array.

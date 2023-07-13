## Problem Statement:
Maze Path using Recursion


## Problem Statement:
Given a maze with obstacles, write a recursive function to find all possible paths from the top-left corner to the bottom-right corner. You can only move down or right.

## Input Format:
The input will consist of the dimensions of the maze (number of rows and columns).

## Output Format:
The output will be an array of strings representing all possible paths from the top-left corner to the bottom-right corner. Each string will consist of 'D' to indicate a down movement and 'R' to indicate a right movement.

## Test Case 1:
Sample Input:
- 3
- 3

Sample Output:
["RRDD", "RDRD", "RDDR", "DRRD", "DRDR", "DDRR"]

## Test Case 2:
sample input: 
- 2
- 2

sample output:
["RD", "DR"]


## Level: Medium

## Hints:
- Use recursion to explore all possible paths from the current position.
At each step, you have two choices: move down or move right.
Make a recursive call for each choice and combine the results.
- Base case: If you reach the bottom-right corner, add the current path to the result.
Recursive case: Make a recursive call for moving down and a recursive call for moving right.
Combine the results of both recursive calls by appending 'D' or 'R' to the current path.

## Approach:
- Define a recursive function that takes the current row, current column, number of rows, number of columns, and current path as parameters.
- If the current row is equal to the number of rows - 1 and the current column is equal to the number of columns - 1, add the - - current path to the result and return.
- If the current row is greater than or equal to the number of rows or the current column is greater than or equal to the number of columns, return.
- Make a recursive call by moving down: increment the current row and append 'D' to the current path.
- Make a recursive call by moving right: increment the current column and append 'R' to the current path.
- Combine the results of both recursive calls and return.

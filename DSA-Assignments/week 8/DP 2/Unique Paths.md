## Problem Statement:
Climbing Stairs

## Problem Statement:
Write a program to find the number of unique paths to reach the bottom-right corner of an m x n grid, starting from the top-left corner and moving only right or down. Your task is to calculate the number of unique paths.

## Input Format:
The user is prompted to enter the number of rows.
The user is prompted to enter the number of columns.

## Output Format:
The program prints the number of unique paths to reach the bottom-right corner.


## Test Case 1:
Sample Input:
- 3
- 7

Sample Output:
28

## Test Case 2:
sample input: 
- 7
- 3

sample output:
28

## Level: Easy

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming array dp to store the results.
Initialize the base cases:
There is only one way to reach any cell in the first row or first column.
- Fill the rest of the array using dynamic programming:
For each cell (i, j) from (1, 1) to (m, n), the number of unique paths to reach the current cell is the sum of the paths from the cell above and the cell to the left: dp[i][j] = dp[i - 1][j] + dp[i][j - 1].
Return dp[m - 1][n - 1], which contains the number of unique paths to reach the bottom-right corner.

## Approach:
- Take input from the user for the number of rows and the number of columns.
- Parse the inputs into integers.
- Implement the uniquePaths function that takes the number of rows and the number of columns as input.
- Create a dynamic programming array dp of size m x n to store the results.
- Initialize the base cases:
- There is only one way to reach any cell in the first row or first column: dp[i][0] = 1 and dp[0][j] = 1 for all i and j.
- Fill the rest of the array using dynamic programming:
- For each cell (i, j) from (1, 1) to (m, n), calculate the number of unique paths to reach the current cell by summing the paths from the cell above and the cell to the left: dp[i][j] = dp[i - 1][j] + dp[i][j - 1].
- Return dp[m - 1][n - 1], which contains the number of unique paths to reach the bottom-right corner.
- Print the number of unique paths.

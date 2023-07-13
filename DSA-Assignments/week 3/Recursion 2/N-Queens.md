## Problem Statement:
N-Queens


## Problem Statement:
Given a chessboard of size N×N, write a recursive function to place N queens on the board such that no two queens threaten each other. A queen can move horizontally, vertically, and diagonally in any direction. Find all possible arrangements of queens on the board.

## Input Format:
The input will be an integer N, representing the size of the chessboard.

## Output Format:
The output will be an array of arrays representing the positions of queens on the board. Each inner array will contain the row and column of a queen.

## Test Case 1:
Sample Input:
4

Sample Output:
[[0, 1], [1, 3], [2, 0], [3, 2]]
[[0, 2], [1, 0], [2, 3], [3, 1]]

## Test Case 2:
sample input: 
2

sample output:
No possible arrangements


## Level: Medium

## Hints:
- Use recursion to place each queen in a row one by one.
At each row, iterate through the columns and check if it is safe to place a queen at that position.
To check safety, ensure that no other queen is present in the same column, same diagonal, or same anti-diagonal.
- Maintain a boolean array to track which columns, diagonals, and anti-diagonals are already occupied by queens.
Use backtracking to undo the placement if it leads to an unsafe position.

## Approach:
- Define a recursive function that takes the current row, the number of queens to be placed, the chessboard size, the current arrangement of queens, and the result as parameters.
- Base case: If the number of queens to be placed is equal to 0, add the current arrangement to the result and return.
- For each column in the current row, check if it is safe to place a queen.
- If it is safe, mark the column, diagonal, and anti-diagonal as occupied, and make a recursive call for the next row.
- After the recursive call, undo the placement by unmarking the column, diagonal, and anti-diagonal.
- Repeat steps 3-5 for each column in the current row.
- Return the result.

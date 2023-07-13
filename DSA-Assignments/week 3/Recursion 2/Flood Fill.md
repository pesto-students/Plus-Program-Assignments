## Problem Statement:
Flood Fill


## Problem Statement:
Given a 2D grid and a starting position (row and column), fill the connected region with a given new color. The connected region consists of all the cells that can be reached from the starting position by moving horizontally or vertically to adjacent cells with the same color as the starting position.

## Input Format:
The input consists of the following:
A 2D grid as an array of arrays representing the grid.
The starting position as two integers representing the row and column indices.
The new color as an integer.

## Output Format:
The output is the updated 2D grid after performing the flood fill.

## Test Case 1:
Sample Input:
- [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]
- 1 1
- 2

Sample Output:
[[0, 1], [1, 3], [2, 0], [3, 2]]
[[0, 2], [1, 0], [2, 3], [3, 1]]

## Test Case 2:
sample input: 
- [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]
- (0, 0)
- 3

sample output:
[
  [3, 3, 3],
  [3, 3, 3],
  [3, 3, 3]
]


## Level: Hard

## Hints:
- Use recursion to explore adjacent cells.
Maintain a visited array to keep track of cells that have already been visited.
- Apply the flood fill algorithm by updating the color of the current cell and recursively performing the same operation on its adjacent cells.

## Approach:
- Initialize a visited array to keep track of visited cells.
- Create a recursive function, floodFill, that takes the current position (row and column) and the new color as parameters.
- Base Case:
If the current position is outside the grid or the current cell has already been visited or the color of the current cell is not the same as the starting color, return.
- Mark the current cell as visited and update its color to the new color.
- Recursively call the floodFill function for the adjacent cells (up, down, left, right) with the same color.
- Finally, call the floodFill function with the starting position and the new color.

## Problem Name:
Maze Maximum Binary Search

## Problem Statement:
You are given a maze represented by a 2D grid. 
Each cell in the grid represents a room, and the 
value of the cell represents the number of gold 
coins in that room. You start from the top-left room
(0, 0) and need to find the maximum number of
coins you can collect while moving through the 
maze. You can only move down or right at any 
given point. Implement a binary search approach 
to solve this problem efficiently.


## Input Format:
The first line contains an integer, N, 
representing the size of the maze grid 
(N x N).

The next N lines contain N 
space-separated integers representing 
the number of gold coins in each room.

## Output Format:
An integer representing the 
maximum number of coins 
that can be collected.

## Test Case 1:
sample Input
5
0 2 3 4 1
2 5 1 2 6
3 6 2 5 9
8 1 9 2 5
2 3 2 1 6

Sample Output
38

## Test Case 2:
Sample input:
3
1 2 3
4 5 6
7 8 9

Sample output:
22

## Level: Hard

## Hints:
- Start by understanding the problem statement and
constraints.Consider using dynamic programming and 
memoization to optimize the solution.

- Break down the problem into smaller 
subproblems to find the optimal solution.
Implement the binary search approach to 
find the maximum coins.

## Approach:
Read the input values from the user.
Initialize a 2D grid with the given input values.
Create a dynamic programming table of the same size as the grid.
Use the binary search approach to find the maximum number of coins:
Initialize the start and end variables as 0 and the maximum possible value in the grid, 
respectively.
While start is less than or equal to end:
Calculate the middle value as (start + end) / 2.
Use dynamic programming to determine if it's possible to collect at least the middle 
value of coins.
If possible, update the start variable to middle + 1.
Otherwise, update the end variable to middle - 1.
Return the maximum number of coins obtained.
## Problem Statement:
Paint House

## Problem Statement:
Write a program to find the minimum cost to paint all the houses without painting any two adjacent houses with the same color. Given a matrix representing the cost of painting houses with different colors, your task is to calculate the minimum cost.

## Input Format:
The user is prompted to enter the cost matrix, where each row represents a house and each column represents the cost of painting that house with a particular color. The rows are separated by commas, and the values in each row are separated by spaces.


## Output Format:
The program prints the minimum cost to paint all the houses.


## Test Case 1:
Sample Input:
17 2 17, 16 16 5, 14 3 19

Sample Output:
10

## Test Case 2:
sample input: 
1 2 3, 4 5 6, 7 8 9, 10 11 12

sample output:
20

## Level: Hard

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming matrix dp to store the minimum costs.
Initialize the first row of dp with the costs of painting the first house.
- Fill the rest of dp using dynamic programming:
For each house starting from the second house:
Calculate the minimum cost of painting the current house with each color by considering the costs of painting the previous house with the other two colors.
Return the minimum cost from the last row of dp.

## Approach:
- Take input from the user as a matrix of costs, where each row represents a house and each column represents the cost of painting that house with a particular color.
- Parse the input into a matrix of costs.
- Implement the minCostToPaintHouses function that takes the matrix of costs as input.
- Get the number of houses n.
- If there are no houses, return 0 as the minimum cost.
- Create a dynamic programming matrix dp of size n x 3 to store the minimum costs.
- Initialize the first row of dp with the costs of painting the first house.
- Iterate through the matrix starting from the second row:
- Calculate the minimum cost of painting the current house with each color by considering the costs of painting the previous house with the other two colors.
- Return the minimum cost from the last row of dp.
- Print the minimum cost to paint all the houses.

## Problem Statement:
Climbing Stairs

## Problem Statement:
Write a program to determine the number of distinct ways to reach the top of a staircase with n steps, where a person can climb either 1 or 2 steps at a time. Your task is to calculate the number of distinct ways to reach the top step.


## Input Format:
The user is prompted to enter the number of steps.


## Output Format:
The program prints the number of distinct ways to reach the top step.


## Test Case 1:
Sample Input:
5

Sample Output:
8

## Test Case 2:
sample input: 
4

sample output:
5

## Level: Easy

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming array dp to store the results.
Initialize the base cases: dp[1] = 1 and dp[2] = 2.
- Fill the rest of the array using dynamic programming:
For each step from 3 to n, the number of distinct ways to reach the current step is the sum of the ways to reach the previous two steps: dp[i] = dp[i - 1] + dp[i - 2].
Return dp[n], which contains the number of distinct ways to reach the top step.

## Approach:
- Take input from the user for the number of steps.
- Parse the input into an integer.
- Implement the climbStairs function that takes the number of steps as input.
- Create a dynamic programming array dp to store the results.
- Initialize the base cases: dp[1] = 1 and dp[2] = 2.
- Fill the rest of the array using dynamic programming:
- For each step i from 3 to n, calculate the number of distinct ways to reach the current step by summing the ways to reach the previous two steps: dp[i] = dp[i - 1] + dp[i - 2].
- Return dp[n], which contains the number of distinct ways to reach the top step.
- Print the number of distinct ways.

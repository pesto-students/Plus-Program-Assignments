## Problem Statement:
nth Fibonacci Number using Dynamic Programming

## Problem Statement:
Write a program to calculate the nth Fibonacci number using dynamic programming. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1. Your task is to calculate the nth Fibonacci number efficiently using dynamic programming.


## Input Format:
The user is prompted to enter an integer value for n, which represents the position of the Fibonacci number to be calculated.

## Output Format:
The program prints the value of the nth Fibonacci number.

## Test Case 1:
Sample Input:
7

Sample Output:
13

## Test Case 2:
sample input: 
5

sample output:
5


## Level: Easy

## Hints:
- Use an array to store the Fibonacci numbers.
Initialize the base cases: fib[0] = 0 and fib[1] = 1.
- Calculate the Fibonacci numbers from the bottom-up approach, using the previously calculated values.
Return the nth Fibonacci number.

## Approach:
- Take input from the user as the value of n.
- Create an array fib to store the Fibonacci numbers.
- Initialize the base cases: fib[0] = 0 and fib[1] = 1.
- Iterate from 2 to n:
- Calculate the Fibonacci number at index i by adding the previous two Fibonacci numbers: fib[i] = fib[i - 1] + fib[i - 2].
- Return the nth Fibonacci number: fib[n].
- Print the result.

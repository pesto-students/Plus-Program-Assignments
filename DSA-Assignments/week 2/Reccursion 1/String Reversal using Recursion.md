## Problem Statement:
String Reversal using Recursion

## Problem Statement:
Write a recursive function to reverse a given string.


## Input Format:
The input is a string.


## Output Format:
The function should return the reversed string.

## Test Case 1:
Sample Input:
hello

Sample Output:
olleh

## Test Case 2:
Sample input:
racecar

Sample output:
racecar

## Level: Easy

## Hints:
- Recursion involves breaking down a problem into smaller subproblems.
Think about how you can break down the string into smaller parts to reverse it.
- Consider the base case when the string is empty or has only one character.

## Approach:
- Define a recursive function that takes a string as input.
- Check if the string is empty or has only one character. If so, return the string as it is (base case).
- Otherwise, extract the first character of the string and concatenate it with the reversed substring obtained by calling the       recursive function on the remaining part of the string.
- Return the result.

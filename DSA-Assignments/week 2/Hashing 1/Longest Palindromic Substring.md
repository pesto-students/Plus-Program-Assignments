## Problem Statement:
Longest Palindromic Substring

## Problem Statement:
Write a function that takes a string as input and finds
the longest palindromic substring within the string. 
A palindromic substring is a substring that reads the 
same forwards and backwards.


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter a string.

## Output Format:
The function should return the longest
palindromic substring found in the input
string.

## Test Case 1:
sample Input
babad

Sample Output
bab

## Test Case 2:
Example input:
cbbd

Example output:
bb

## Level: Medium

## Hints:
- Think about how you can utilize the already 
computed palindromic substrings to find longer 
palindromic substrings.


- Pay attention to the base cases of a single
 character and two identical characters.

## Approach:
- Initialize two variables, start and maxLength, to keep track of the starting index and length of the longest palindromic substring.
- Define a helper function expandFromCenter that takes two indices, left and right, and expands outwards to find the longest palindromic substring centered around these indices.
- Iterate through each character in the input string.
- For each character, call expandFromCenter twice to handle both odd and even-length palindromes.
- In the expandFromCenter function, while the characters at left and right indices are equal, expand towards both ends by decrementing left and incrementing right.
- After the expansion, calculate the length of the palindromic substring as right - left - 1.
- If the length is greater than maxLength, update start and maxLength with the current indices and length.
- After iterating through all characters, extract the longest palindromic substring using start and maxLength.
Return the longest palindromic substring.

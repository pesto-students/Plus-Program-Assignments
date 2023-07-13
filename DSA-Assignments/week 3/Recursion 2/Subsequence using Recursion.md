## Problem Statement:
Subsequence using Recursion


## Problem Statement:
Given a string, write a recursive function to find all possible subsequences of the string.


## Input Format:
The input will be a string.

## Output Format:
The output will be an array of strings representing all possible subsequences of the input string.

## Test Case 1:
Sample Input:
abc

Sample Output:
[, a, b, ab, c, ac, bc, abc]

## Test Case 2:
sample input: 
hello

sample output:
[, h, e, eh, l, lh, le, leh, l, lh, lo, loh, ll, llh, lle, lleh, ll, llh, llo, lloh, o, oh, ol, olh, oll, ollh, olle, olleh]

## Level: Easy

## Hints:
- Use recursion to generate all possible subsequences.
At each step, you have two choices: include the current character or exclude it.
If you include the current character, make a recursive call on the remaining subsequence.
- If you exclude the current character, make a recursive call on the remaining subsequence.
Combine the results of both recursive calls to get all possible subsequences.

## Approach:
- Define a recursive function that takes a string and an index as parameters.
- If the index is equal to the length of the string, return an array with an empty string.
Otherwise, make two recursive calls:
- Call the recursive function with the next index to include the current character.
- Call the recursive function with the next index to exclude the current character.
- Combine the results of both recursive calls by concatenating them.
- Return the combined result.

## Problem Statement:
Word Break - Check if a String can be Segmented into Dictionary Words

## Problem Statement:
Write a program to determine if a given string can be segmented into a space-separated sequence of words from a dictionary. You are given a dictionary of words, and your task is to determine if the string can be split into multiple words, such that each word is present in the dictionary.


## Input Format:
The user is prompted to enter the string.
The user is prompted to enter the dictionary words as a space-separated string.

## Output Format:
The program prints whether the string can be segmented into dictionary words or not.


## Test Case 1:
Sample Input:
applepenapple
apple pen

Sample Output:
true


## Test Case 2:
sample input: 
pineapplepenapple
apple pen pineapple

sample output:
true


## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming array dp to store the results.
Initialize dp[0] as true since the empty string is always present in the dictionary.
Iterate through each character of the string and check if the substring up to the current character can be segmented.
- Use a nested loop to check all possible substrings and update dp[i] if a matching word is found in the dictionary.
After the iterations, dp[s.length] will contain the result for the entire string.
Return dp[s.length].


## Approach:
- Take input from the user for the string to be checked and the dictionary words.
- Split the input string of dictionary words into an array of strings.
- Implement the wordBreak function that takes the string and the dictionary words as input.
- Create a dynamic programming array dp to store the results.
- Initialize dp[0] as true since the empty string is always present in the dictionary.
- Iterate through each character of the string.
- Check if the substring up to the current character can be segmented by iterating through all possible substrings.
- If a matching word is found in the dictionary, update dp[i] to true.
- After the iterations, dp[s.length] will contain the result for the entire string.
- Return dp[s.length].
- Print the result.

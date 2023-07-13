## Problem Statement:
Longest Subarray with 
Equal Number of Vowels
and Consonants

## Problem Statement:
Write a function that takes an array of characters as 
input and finds the length of the longest subarray in 
the array that contains an equal number of vowels 
and consonants. The vowels are defined as 
'a', 'e', 'i', 'o', and 'u' (both lowercase and uppercase).


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter a string.

## Output Format:
The function should return the length 
of the longest subarray that contains 
an equal number of vowels and 
consonants.

## Test Case 1:
sample Input
abcdeiouiop

Sample Output
8

## Test Case 2:
Example input:
aeiouAEIOU

Example output:
10

## Level: Medium

## Hints:
- Consider using hashing to efficiently keep track of the count of vowels and consonants encountered.
Initialize two variables, vowelCount and consonantCount, to keep track of the counts.
Iterate through the characters in the array and update the counts accordingly.

- Keep track of the maximum length encountered so far.
At any index, if the counts of vowels and consonants are equal, update the maximum length if necessary. 

## Approach:
- Initialize variables maxLen, vowelCount, and consonantCount to 0.
- Initialize an empty hashmap to keep track of the cumulative counts of vowels and consonants encountered.
- Iterate through each character in the array.
- For each character, check if it is a vowel or a consonant.
- Update the counts accordingly and calculate the difference between vowelCount and consonantCount.
- If the difference is zero, update maxLen to the maximum value between maxLen and the current index plus one.
- If the difference is already present in the hashmap, update maxLen to the maximum value between maxLen and the difference between the current index and the index stored in the hashmap.
- If the difference is not present in the hashmap, store the current index in the hashmap with the difference as the key.
Finally, return maxLen.

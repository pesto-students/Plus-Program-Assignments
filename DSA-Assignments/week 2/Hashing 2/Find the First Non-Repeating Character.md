## Problem Statement:
Find the First Non-Repeating Character

## Problem Statement:
Implement a function that takes a string as input and 
returns the first non-repeating character in the string.


## Input Format:
The input is taken as a prompt from the user. 
The user is prompted to enter a string.


## Output Format:
The program should display the first 
non-repeating character in the string. 
If there are no non-repeating characters, 
it should display a message indicating that.


## Test Case 1:
sample Input
abcdabcde

Sample Output
d

## Test Case 2:
Sample input: 
aabbccd

Sample output:
No non-repeating characters found

## Level: Easy

## Hints:
- Use a hash table to count the frequency of each 
character in the string.
- Iterate through the string and update the 
hash table accordingly.
Finally, iterate through the string again and find
the first character with a frequency of 1.


## Approach:
- Create an empty hash table.
- Iterate through the string and update the frequency count of each character in the hash table.
- Iterate through the string again and check the frequency count of each character.
- Return the first character with a frequency of 1.
- If no such character is found, return a message indicating that.

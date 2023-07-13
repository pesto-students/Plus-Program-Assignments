## Problem Statement:
Minimum Window Substring

## Problem Statement:
Given two strings, find the minimum window in the 
first string that contains all the characters from the 
second string. Return an empty string if there is no 
such window.


## Input Format:
Two strings: str1 and str2
line 1 - str1
line 2 - dtr2


## Output Format:
A string representing the minimum 
window substring


## Test Case 1:
sample Input
ADOBECODEBANC
ABC

Sample Output
BANC

## Test Case 2:
Sample input: 
aaabbbcdd
abc


Sample output:
abbbc

## Level: Hard

## Hints:
- Use a hashmap to store the count of characters in str2.
Use two pointers, left and right, to traverse through str1.
Keep track of the count of characters in the current window.
Move the right pointer to expand the window until all characters from str2 are included.
- Move the left pointer to contract the window, updating the minimum window substring.
Continue this process until the right pointer reaches the end of str1.
Return the minimum window substring.


## Approach:
- Initialize a hashmap targetCount to store the count of characters in str2.
- Initialize variables left and right to track the window boundaries in str1.
- Initialize variables minWindow and minLength to track the minimum window substring.
- Initialize a variable requiredCount to keep track of the required count of characters in the window.
- Move the right pointer to expand the window and update requiredCount and targetCount accordingly.
- If requiredCount becomes 0, it means all characters from str2 are included in the window.
- Update minWindow and minLength if the current window is smaller.
- Move the left pointer to contract the window and update requiredCount and targetCount accordingly.
- Repeat steps 5 and 6 until the right pointer reaches the end of str1.
- Return the minimum window substring.

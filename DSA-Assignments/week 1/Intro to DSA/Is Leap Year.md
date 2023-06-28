## Problem Statement:
Is Leap Year ?

## Problem Statement:
Take input a number from the user and check 
number is a leap year or not


## Input Format:
First Line contains a number

## Output Format:
A String Value - Yes/No

## Test Case 1:
Example input:
2000

Example output:
Yes

## Test Case 2:
Example input:
1900

Example output:
No

## Level: Medium

## Hints:
- A leap year is divisible by 4.
If a year is divisible by 100, it must also be 
divisible by 400 to be a leap year.

- Use the modulus operator (%) to check for 
divisibility.

## Approach:
- Prompt the user to enter a year.
Store the user input in a variable.
Check if the year is divisible by 4 and not divisible by 100, or divisible by 400.
If the condition is true, return true (leap year). Otherwise, return false (not a leap year).
Display the result.

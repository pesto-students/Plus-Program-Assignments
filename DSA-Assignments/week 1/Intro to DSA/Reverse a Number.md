## Problem Statement:
Reverse a Number

## Problem Statement:
Take input a number from the user and reverse 
all the digits 


## Input Format:
First Line contains a number

## Output Format:
A number

## Test Case 1:
Example input:
12345

Example output:
54321

## Test Case 2:
Example input:
100

Example output:
1

## Level: Easy

## Hints:
- Use the modulus operator (%) to extract the last 
digit of the number.
Multiply the reversed number by 10 and add the 
extracted digit to it.

- Divide the original number by 10 to remove 
the last digit.
Repeat the process until the original number 
becomes zero.

## Approach:
- Prompt the user to enter a number.
Store the user input in a variable.
Initialize a variable to store the reversed number (start with 0).
Use a while loop to iterate until the number becomes zero.
Extract the last digit of the number using the modulus operator (%).
Multiply the reversed number by 10 and add the extracted digit to it.
Divide the number by 10 to remove the last digit.
Repeat the above steps until the number becomes zero.
Return the reversed number.
Display the reversed number.

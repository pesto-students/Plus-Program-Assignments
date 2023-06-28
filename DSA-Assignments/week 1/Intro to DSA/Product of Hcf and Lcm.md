## Problem Statement:
Product of Hcf and Lcm

## Problem Statement:
Take 2 input  from the user and display the 
product of lcm and hcf


## Input Format:
- First Line contains a number
- Second Line contains a number

## Output Format:
A number

## Test Case 1:
Example input:
6
8

Example output:
48

## Test Case 2:
Example input:
15
25

Example output:
375

## Level: Hard

## Hints:
- The HCF (GCD) of two numbers can be 
calculated using the Euclidean algorithm, 
which involves finding the remainder of 
division operations.


- The LCM of two numbers can be calculated 
using the formula: LCM = (a * b) / HCF.
Handle edge cases where one or both of 
the numbers are zero.

## Approach:
- Define functions to calculate the HCF and LCM of two numbers.
Implement the HCF calculation using a while loop and the Euclidean algorithm.
Calculate the LCM using the formula: LCM = (a * b) / HCF.
Write a function to run test cases.
Prepare test cases as an array of input pairs.
Iterate through the test cases, calculating HCF, LCM, and the product of HCF and 
LCM for each case.
Display the inputs, HCF, LCM, and the product of HCF and LCM for each test case.

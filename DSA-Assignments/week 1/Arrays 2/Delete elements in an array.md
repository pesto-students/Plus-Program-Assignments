## Problem Statement:
Delete elements in an array

## Problem Statement:
Take an array input from the user and delete 
all the elements which are divisible by 2 and 3


## Input Format:
First Line contains comma separated numbers representing the elements of an array

## Output Format:
An array of numbers

## Test Case 1:
Example input:
1,2,3,4,5,6,7,8,9

Example output:
[1, 5, 7]

## Test Case 2:
Example input:
9,12,15,18,21

Example output:
[9, 15, 21]

## Level: Easy

## Hints:
- Use the filter method to create a new
array that only includes elements that 
are not divisible by 2 and 3.
- The filter method takes a callback
function that returns true for 
elements that should be kept in 
the new array.

## Approach:
- Step 1 - Take input from the user and store it in an array.
- Step 2 - Use the filter method on the array to create a new array that only includes 
              elements not divisible by 2 and 3.
- Step 3 - Return the new array.

## Problem Name:
Old Key New Key

## Problem Statement:
Take array as an input from the user and
replace occurrences of an old key with a new key 
in an array


## Input Format:
- First Line contains comma separated numbers representing the elements of an array
- Second line - the numbers which should be replaced
- Third line - the new number which should be replaced

## Output Format:
An array of numbers

## Test Case 1:
Example input:
- 1,2,3,2,4,2,5
- 2
- 6

Example output:
- [1, 6, 3, 6, 4, 6, 5]

## Test Case 2:
Example input:
- 5,5,5,5
- 5
- 2

Example output:
- [2, 2, 2, 2]

## Level: Easy

## Hints:
- Use a loop to iterate over each
element of the array.
- Check if the current element is 
equal to oldKey, and if so, replace 
it with newKey.

## Approach:
- step 1  - Take input from the user and store it in an array.
- step 2 - Get the oldKey and newKey from the user.
- step 3- Use a loop to iterate over each element in the array.
- step 4 - Check if the current element is equal to oldKey, and if so, replace it with
- newKey.
- step 5 - Return the modified array.

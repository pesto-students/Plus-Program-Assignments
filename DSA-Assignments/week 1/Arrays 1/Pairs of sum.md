## Problem Statement:
Pairs of sum

## Problem Statement:
Take an array as an input and a sum value S
and returns an array of pairs whose sum is 
equal to sum value S.


## Input Format:
- First Line contains comma separated numbers representing the elements of an array
- Second Line contains the sum value


## Output Format:
An Array of pairs in the sub-array

## Test Case 1:
Sample Input:
- 2,4,6,8,10
- 12

Sample Output:
[[2, 10], [4, 8]]

## Test Case 2:
Example input:
- 1,1,1,1,1
- 2

Example output:
[[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]

## Level: Hard

## Hints:
- Consider using nested loops to iterate 
over pairs of elements in the array.                                                                            
- For each pair, check if their sum 
equals the target sum.
If a pair is found, add it to the pairs 
array.

## Approach:
- step 1 - Initialize an empty pairs array.
- step 2 Iterate over the array elements using a nested loop.
- step 3 - For each pair of elements, check if their sum equals the target sum.
- step 4 If a pair is found, add it to the pairs array.
- step 5 Return the pairs array.


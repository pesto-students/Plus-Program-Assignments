## Problem Statement:
Four Sum

## Problem Statement:
Given an array of integers and a target sum, find all 
unique quadruplets in the array that sum up to the 
target using hashing.


## Input Format:
First line - An array of integers.
Second line - A target sum.


## Output Format:
An array of arrays, where each inner 
array represents a unique quadruplet 
that sums up to the target.


## Test Case 1:
sample Input
1,0,-1,0,-2,2
0

Sample Output
[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

## Test Case 2:
Sample input: 
2,2,2,2,2
8

Sample output:
[[2, 2, 2, 2]]

## Level: Medium

## Hints:
- Use a hash table to store the sums of all possible 
pairs of elements in the array.
- Iterate through the pairs and check if the 
complement of the pair exists in the hash table.
If it does, add the pair and its complement to 
the result.


## Approach:
- Create an empty hash table to store the sums of pairs.
- Create an empty result array to store the unique quadruplets.
- Iterate through each pair of elements in the array (outer loop).
- For each pair (i, j), calculate the sum = array[i] + array[j].
- Calculate the complement = target - sum.
- Check if the complement exists in the hash table. If it does, add the pair and its complement to the result.
- Add the sum to the hash table with the pair as the value.
- Return the result array.

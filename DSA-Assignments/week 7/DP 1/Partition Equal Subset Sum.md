## Problem Statement:
Partition Equal Subset Sum

## Problem Statement:
Write a program to determine if a given set of positive integers can be partitioned into two subsets with equal sum. Your task is to check if it is possible to divide the set into two non-empty subsets, such that the sum of elements in each subset is the same.

## Input Format:
The user is prompted to enter the set of positive integers as a space-separated string.


## Output Format:
The program prints whether the set can be partitioned into two equal-sum subsets or not.



## Test Case 1:
Sample Input:
1 5 11 5

Sample Output:
true


## Test Case 2:
sample input: 
1 2 3 4 5 6 7

sample output:
true


## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Calculate the total sum of the numbers in the set.
If the total sum is odd, it cannot be divided into two equal subsets, so return false.
Calculate the target sum for each subset, which is half of the total sum.
Create a dynamic programming array dp to store the results.
Initialize dp[0] as true since an empty subset can have a sum of 0.
- Iterate through each number in the set.
Iterate from the target sum down to the current number.
Check if including the current number can reach the current sum.
After the iterations, dp[targetSum] will contain the result for the target sum.
Return dp[targetSum].


## Approach:
- Take input from the user for the set of positive integers.
- Split the input string of positive integers into an array of integers.
- Implement the canPartition function that takes the set of positive integers as input.
- Calculate the total sum of the numbers in the set.
- If the total sum is odd, it cannot be divided into two equal subsets, so return false.
- Calculate the target sum for each subset, which is half of the total sum.
- Create a dynamic programming array dp to store the results.
- Initialize dp[0] as true since an empty subset can have a sum of 0.
- Iterate through each number in the set.
- Iterate from the target sum down to the current number.
- Check if including the current number can reach the current sum.
- After the iterations, dp[targetSum] will contain the result for the target sum.
- Return dp[targetSum].
- Print whether the set can be partitioned into two equal-sum subsets.

## Problem Statement:
Root to Leaf Path Sum

## Problem Statement:
Determine if there is a root to leaf path with a given sum in a tree.


## Input Format:
The input consists of two parts:

- The first line contains the nodes of the tree in a space-separated format.
- The second line contains the target sum.


## Output Format:
The output is a boolean value indicating whether there is a root to leaf path with the given sum or not.

## Test Case 1:
Sample Input:
5 4 8 11 null 13 4 7 2 null null null 1
22

Sample Output
true


## Test Case 2:
sample input: 
1 2
1

sample output:
false

## Level: Hard

## Hints:
- Traverse the tree in a depth-first manner, keeping track of the current sum.
At each node, subtract the node's value from the current sum.
Check if the current node is a leaf node and if the current sum is zero. If both conditions are satisfied, return true.
- Recursively check for the left and right subtrees, passing the updated sum.
If none of the paths result in a sum of zero at a leaf node, return false.

## Approach:
- Define a helper function hasPathSum(root, targetSum) to perform the path sum check recursively.
- If the root is null, return false as there is no path to check.
- Subtract the value of the current node from the target sum.
- If the current node is a leaf node (i.e., both left and right children are null), check if the target sum is zero. If so, return - true; otherwise, return false.
- Recursively check if there is a path with the remaining sum in the left and right subtrees.
- If either of the recursive calls returns true, it means a path with the target sum exists. Return true.
- If none of the paths result in a sum of zero at a leaf node, return false.

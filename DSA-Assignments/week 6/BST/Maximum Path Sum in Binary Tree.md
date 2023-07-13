## Problem Statement:
Maximum Path Sum in Binary Tree

## Problem Statement:
Write a function to find the maximum path sum in a binary tree.


## Input Format:
The input for the maximum path sum function is a binary tree represented by its root node. The elements of the binary tree will be provided as a space-separated string.

## Output Format:
The maximum path sum function should return the maximum sum of any path in the binary tree.

## Test Case 1:
Sample Input:
1 2 3 -1 5 6 7

Sample Output:
18

## Test Case 2:
sample input: 
1 2 null 3 null 4 null 5

sample output:
15


## Level: Easy

## Hints:
- Use a recursive approach to calculate the maximum path sum.
At each node, compute the maximum path sum through that node (including the node itself) by considering both the left and right subtrees.
- Update the global maximum path sum if a new maximum is found.

## Approach:
- Initialize a global variable maxSum to a very small value.
- Implement a helper function findMaxPathSum that takes a node as input and returns the maximum path sum through that node.
- In the findMaxPathSum function, if the node is null, return 0.
- Recursively calculate the maximum path sum in the left subtree and store it in leftSum.
- Recursively calculate the maximum path sum in the right subtree and store it in rightSum.
- Compute the maximum path sum through the current node by considering three options: node alone, node with left subtree, and node - with right subtree.
- Update the maxSum if the new path sum is greater.
- Return the maximum path sum through the current node.
- Call the findMaxPathSum function on the root node and store the result in maxSum.
- Return the maxSum as the final result.

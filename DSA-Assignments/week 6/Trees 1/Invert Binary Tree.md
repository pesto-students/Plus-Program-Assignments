## Problem Statement:
Invert Binary Tree

## Problem Statement:
 Implement a function to invert a binary tree. Given the root of a binary tree, the function should modify the tree by swapping each node's left and right children.


## Input Format:
The input parameter root represents the root node of the binary tree.


## Output Format:
The function should return the root node of the inverted binary tree.

level 1: value
level 2: value value
level 3: value value value value

## Test Case 1:
Sample Input:
4 2 7 1 3 6 9

Sample Output:
Level 1: 4
Level 2: 7 2
Level 3: 9 6 3 1



## Test Case 2:
sample input: 
10 5 15 3 8 12 18

sample output:
Level 1: 10
Level 2: 15 5
Level 3: 18 12 8 3


## Level: Medium

## Hints:
- The problem can be solved recursively by swapping the left and right children of each node in the binary tree.
Start with the root node and swap its left and right children.
- Recursively apply the same swapping operation to the left and right subtrees.
Repeat this process until all nodes in the tree have been processed.
The base case of the recursion is when a null node is encountered, in which case there is no need to perform any swapping.

## Approach:
- If the root is null, return null as it represents an empty tree.
- Swap the left and right children of the root node.
- Recursively invert the left and right subtrees by calling the invertBinaryTree function on each child.
- Return the root node of the inverted binary tree.
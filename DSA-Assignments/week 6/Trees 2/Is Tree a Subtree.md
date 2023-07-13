## Problem Statement:
Is Tree a Subtree ?

## Problem Statement:
Check if a given tree is a subtree of another tree?


## Input Format:
- Prompt the user to enter the nodes of two binary trees.


## Output Format:
Display whether the second tree is a subtree of the first tree.

## Test Case 1:
Sample Input:
1 2 3 4 5 6
2 4 5

Sample Output
The second tree is a subtree of the first tree.


## Test Case 2:
sample input: 
1 2 3 4 5 6
5 4 6

sample output:
The second tree is not a subtree of the first tree.

## Level: Medium

## Hints:
- Start by implementing functions to create binary trees and compare if two trees are identical.
To check if a tree is a subtree of another tree, iterate through the first tree and for each node, check if it is identical to the second tree using the identical tree comparison function.
Consider different cases such as an empty second tree or when the first tree's node matches the root of the second tree.
While the queue is not empty, dequeue a node and add its value to the current level.
- Use a recursive approach to check if the left and right subtrees of the first tree match the second tree.
Keep track of a flag to indicate if a subtree is found during the iteration.
Consider handling edge cases where either tree is empty or if the second tree is larger than the first tree.

## Approach:
- Implement a TreeNode class to represent the nodes of a binary tree.
- Create functions to build binary trees from user input.
- Implement a function to check if two trees are identical.
- Implement a function to check if the second tree is a subtree of the first tree.
- Use a recursive approach to check if the left and right subtrees of the first tree match the second tree.
- Return true if a subtree is found; otherwise, return false.

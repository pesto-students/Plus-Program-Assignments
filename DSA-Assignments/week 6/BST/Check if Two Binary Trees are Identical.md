## Problem Statement:
Check if Two Binary Trees are Identical

## Problem Statement:
Write a function to check if two binary trees are identical. Two binary trees are considered identical if they have the same structure and the same values at each corresponding node.


## Input Format:
The input consists of two binary trees represented as arrays. Each array represents the level order traversal of a binary tree. The elements of the arrays are integers.
The input is taken from the user as prompts.

## Output Format:
The output should be a boolean value indicating whether the two binary trees are identical or not.

## Test Case 1:
Sample Input:
1 2 3
1 2 3

Sample Output:
The two binary trees are identical

## Test Case 2:
sample input: 
1 2 3
1 3 2

sample output:
The two binary trees are not identical


## Level: Medium

## Hints:
- Start by comparing the root nodes of the two trees. If they are not equal, return false.
Recursively compare the left subtrees and right subtrees of the two trees.
Use a recursive approach to compare the nodes of the trees.
- Base case: If both trees are null, return true. If only one of them is null, return false.
Recursive case: If the values of the current nodes are equal, recursively check if the left subtrees and right subtrees are identical.

## Approach:
- Check if both trees are null. If yes, return true.
- Check if either one of the trees is null. If yes, return false.
- Check if the values of the root nodes are equal. If not, return false.
- Recursively check if the left subtrees of both trees are identical.
- Recursively check if the right subtrees of both trees are identical.
- If all the above conditions are satisfied, return true.

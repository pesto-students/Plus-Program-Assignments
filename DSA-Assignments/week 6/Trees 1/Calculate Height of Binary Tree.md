## Problem Statement:
Calculate Height of Binary Tree

## Problem Statement:
Write a function to calculate the height of a binary tree.


## Input Format:
The user will be prompted to enter the elements of the binary tree, separated by spaces.

## Output Format:
The program will output the height of the binary tree.

## Test Case 1:
Sample Input:
3 9 20 null null 15 7

Sample Output:
3


## Test Case 2:
sample input: 
10 5 20 3 8 null 25 null null null null 7

sample output:
4


## Level: Easy

## Hints:
- The height of an empty tree is 0.
The height of a tree can be calculated recursively by finding the maximum height of its left and right subtrees.
- Each recursive call will return the height of the subtree rooted at the current node.
The height of the overall tree is the maximum height among the left and right subtrees, plus 1.

## Approach:
- If the root is null, return 0 (height of an empty tree).
- Otherwise, recursively calculate the height of the left and right subtrees.
- Return the maximum height among the left and right subtrees, plus 1 (to account for the root node).

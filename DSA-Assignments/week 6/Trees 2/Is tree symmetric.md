## Problem Statement:
Is tree symmetric ?

## Problem Statement:
Check if a given tree is symmetric


## Input Format:
space separated integers

## Output Format:
The output will be displayed using console.log() statements in JavaScript. It will display whether the tree is symmetric or not.

## Test Case 1:
Sample Input:
1 2 2 3 4 4 3

Sample Output:
The tree is symmetric


## Test Case 2:
sample input: 
1 2 2 null 3 null 3

sample output:
The tree is symmetric

## Level: Easy

## Hints:
- A symmetric tree is a tree where the left subtree is the mirror image of the right subtree.
- The comparison should be done level by level, comparing the corresponding nodes.
Use a recursive approach to check if the subtrees are symmetric.

## Approach:
- Create a recursive function that takes two tree nodes as input.
- Check if both nodes are null. If so, return true as it means the subtrees are symmetric.
- Check if one of the nodes is null. If so, return false as it means the subtrees are not symmetric.
- Check if the values of the two nodes are equal. If not, return false.
- Recursively check if the left subtree of one node is symmetric to the right subtree of the other node, and vice versa.
-   Return true if both conditions are satisfied.

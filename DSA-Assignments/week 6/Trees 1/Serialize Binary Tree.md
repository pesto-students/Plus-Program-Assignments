## Problem Statement:
Serialize Binary Tree

## Problem Statement:
Write a function to serialize a binary tree into a string representation.

## Input Format:
The input for the serialization function is a binary tree represented by its root node. The elements of the binary tree will be provided as a space-separated string.


## Output Format:
The serialization function should return a string representation of the binary tree.

## Test Case 1:
Sample Input:
1

Sample Output:
1


## Test Case 2:
sample input: 
1 2 null null null

sample output:
2,1


## Level: Hard

## Hints:
- Use a preorder traversal to visit the nodes of the binary tree.
- Use a recursive approach to serialize the left and right subtrees.

## Approach:
- If the root is null, return an empty string.
- Recursively serialize the left subtree and append it to the serialized string.
- Recursively serialize the right subtree and append it to the serialized string.
- Append the value of the root node to the serialized string.
- Return the serialized string.
## Problem Statement:
Merge Binary Tree

## Problem Statement:
You are given the task to merge two binary trees into a single binary tree. Each tree is represented by its array representation, where each element represents a node in the binary tree. Your task is to implement a function mergeBinaryTrees that takes two binary trees as input and returns the merged binary tree.

Write a function mergeBinaryTrees that merges the two binary trees based on the following rules:

If both trees are null, the merged tree is also null.
If either tree is null, the merged tree is the non-null tree.
For a non-null node in both trees, the value of the merged node is the sum of the corresponding nodes' values in the input trees.
The left child of the merged node is obtained by recursively merging the left children of the input trees.
The right child of the merged node is obtained by recursively merging the right children of the input trees.
Your task is to implement the mergeBinaryTrees function and test it on multiple test cases.


## Input Format:
The input consists of two lines, where each line represents the array representation of a binary tree. The array elements are separated by spaces.


## Output Format:
'The merged binary tree is printed in the pre-order traversal.

## Test Case 1:
Sample Input:
1 2 3 4 5
6 7 8 9 10

Sample Output:
7
9
13
15
11
17
19




## Test Case 2:
sample input: 
1 2 3
4 null 6

sample output:
5
2
9


## Level: Medium

## Hints:
- Use a recursive approach to merge the trees.
- Create a new node for each merged node and assign the sum of corresponding values.
Recursively merge the left and right subtrees. is no need to perform any swapping.

## Approach:
- Create a Node class to represent each node in the binary tree.
- Implement the mergeBinaryTrees function that takes two binary trees as input.
- Handle the base cases where either or both trees are null.
- Create a new node with the sum of values from the corresponding nodes of the two trees.
- Recursively merge the left and right subtrees by calling mergeBinaryTrees on the left and right child nodes.
- Return the merged node.
- Prompt the user to enter the array representation of the two binary trees.
- Create the binary trees using the input.
- Merge the binary trees by calling the mergeBinaryTrees function.
- Print the merged binary tree in pre-order traversal.
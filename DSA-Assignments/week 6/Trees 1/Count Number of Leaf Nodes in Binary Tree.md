## Problem Statement:
Count Number of Leaf Nodes in Binary Tree

## Problem Statement:
Write a function to count the number of leaf nodes in a binary tree.


## Input Format:
The input consists of a binary tree represented by its elements in level-order traversal order. The elements are separated by spaces. The nodes of the binary tree can be integers or null.


## Output Format:
The output is the count of leaf nodes in the binary tree.

## Test Case 1:
Sample Input:
1 2 3 4 5 null 6

Sample Output:
3



## Test Case 2:
sample input: 
1 null 2 3 null null null

sample output:
2


## Level: Easy

## Hints:
- Traverse the binary tree using a suitable traversal algorithm.
At each node, check if it is a leaf node (i.e., both left and right children are null).
- If a node is a leaf node, increment the count.
Continue the traversal until all nodes have been visited.

## Approach:
- Initialize a count variable to 0.
- Traverse the binary tree using any traversal algorithm (e.g., level-order, pre-order, in-order, post-order).
- At each node, check if it is a leaf node by checking if both left and right children are null.
- If the node is a leaf node, increment the count.
- Continue the traversal until all nodes have been visited.
- Return the count as the number of leaf nodes in the binary tree.
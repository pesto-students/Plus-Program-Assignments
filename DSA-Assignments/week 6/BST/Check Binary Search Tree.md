## Problem Statement:
Check Binary Search Tree

## Problem Statement:
Write a function to check if a given binary tree is a Binary Search Tree (BST). A Binary Search Tree is a binary tree where the values of all nodes in the left subtree are less than or equal to the value of the root node, and the values of all nodes in the right subtree are greater than the value of the root node. Duplicate values are not allowed in a BST.


## Input Format:
The input is a binary tree represented by its nodes. The user is prompted to enter the number of nodes, followed by the value of each node, and the indices of their left and right children (if any).

## Output Format:
The function isBST() returns a boolean value indicating whether the given binary tree is a Binary Search Tree (BST). It returns true if the tree is a BST, and false otherwise.

## Test Case 1:
Sample Input:
5
5
3
7
2
4
1
2
3
4
-1
-1
-1
-1
-1
-1

Sample Output:
true

## Test Case 2:
sample input: 
4
3
2
5
1
2
3
4
-1
-1
-1
-1
-1

sample output:
false


## Level: Easy

## Hints:
- Use the concept of BST property to check if the current node satisfies the condition.
- Recursively check the left and right subtrees of each node.
Keep track of the minimum and maximum values that a node can have in each recursive call.

## Approach:
- The idea is to recursively check if each node in the binary tree satisfies the BST property.
- For each node, we pass the minimum and maximum values that a node can have based on its position in the tree.
- At each node, we check if its value is within thevalid range (between the minimum and maximum values).
- If any node violates the BST property, we return false.
- If we reach a leaf node (node is null), we return true.
- We recursively check the left and right subtrees of each node, passing the updated minimum and maximum values.
- If all nodes satisfy the BST property, we return true.

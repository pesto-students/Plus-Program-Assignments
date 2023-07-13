## Problem Statement:
BST to Sorted Linked List Conversion

## Problem Statement:
Convert a Binary Search Tree (BST) to a sorted linked list.


## Input Format:
The root node of the Binary Search Tree.
Line 1 - number of nodes
Line 2 - values of nodes separated by line

## Output Format:
The head node of the sorted linked list.

## Test Case 1:
Sample Input:
5
7
4
2
5
1
3
6
7

Sample Output:
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

## Test Case 2:
sample input: 
3
2
1
3

sample output:
1 -> 2 -> 3


## Level: Medium

## Hints:
- In-order traversal of the BST will result in a sorted order of the nodes.
Use a temporary pointer to keep track of the previous node while traversing the BST.
- Update the pointers to convert the BST into a linked list.

## Approach:
- Initialize a variable prev as null to keep track of the previous node.
- Define a recursive function convertBSTtoLinkedList that takes a node as input.
- If the current node is null, return.
- Recursively call the convertBSTtoLinkedList function for the left subtree of the current node.
- If prev is null, update the head of the linked list as the current node. Otherwise, set the right pointer of prev to the current node.
- Set the left and right pointers of the current node to null.
- Update prev as the current node.
- Recursively call the convertBSTtoLinkedList function for the right subtree of the current node.
- Call the convertBSTtoLinkedList function initially with the root of the BST.
Return the head of the linked list.

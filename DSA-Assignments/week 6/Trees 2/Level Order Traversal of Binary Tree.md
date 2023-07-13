## Problem Statement:
Level Order Traversal of Binary Tree

## Problem Statement:
Write a function to print the nodes of a binary tree in a level order traversal


## Input Format:
- The number of nodes in the binary tree.
- The values of each node.
- For each node, enter the index of its left child (-1 if none).
- For each node, enter the index of its right child (-1 if none).


## Output Format:
The level order traversal of the binary tree, with each level printed on a separate line.

## Test Case 1:
Sample Input:
5
1
2
3
4
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
-1

Sample Output
Level 1: 1
Level 2: 2
Level 3: 3
Level 4: 4
Level 5: 5


## Test Case 2:
sample input: 
5
1
2
3
4
5
2
3
4
-1
-1
5
-1
-1
-1
-1

sample output:
Level 1: 1
Level 2: 2, 3
Level 3: 4, 5

## Level: Medium

## Hints:
- Use a queue to perform a breadth-first traversal of the binary tree.
Start with the root node and enqueue it.
While the queue is not empty, dequeue a node and add its value to the current level.
- Enqueue the left and right children of the dequeued node (if they exist).
Repeat this process until the queue is empty.

## Approach:
- Create an empty queue and an empty result array.
- Enqueue the root node into the queue.
- While the queue is not empty, do the following:
- Dequeue a node from the front of the queue.
- Add the value of the dequeued node to the current level.
- Enqueue the left and right children of the dequeued node (if they exist).
- Add the current level to the result array.
- Repeat steps 3-4 until the queue is empty.
- Return the result array containing the level order traversal.

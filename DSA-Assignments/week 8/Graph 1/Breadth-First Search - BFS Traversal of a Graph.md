## Problem Statement:
Breadth-First Search - BFS Traversal of a Graph

## Problem Statement:
Write a program to perform a breadth-first search (BFS) traversal on a given graph. Given the graph as an adjacency list, your task is to traverse the graph using BFS and process or print each visited node in the order it is visited.


## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.

## Output Format:
The program prints the BFS traversal of the graph.


## Test Case 1:
Sample Input:
1,2;0,3,4;0,5;1;1;2

Sample Output:
0 1 2 3 4 5

## Test Case 2:
sample input: 
1,2,3;0;0;0

sample output:
0 1 2 3

## Level: Easy

## Hints:
- Use a queue to keep track of the nodes to be visited.
Start with the start node and mark it as visited.
Enqueue the start node.
- Repeat the following steps while the queue is not empty:
Dequeue a node from the queue and process or print it.
Enqueue all adjacent nodes of the dequeued node that are not yet visited.
Continue this process until the queue is empty.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the bfsTraversal function that takes the adjacency list and the start node as input.
- Create a visited array of size graph.length to track visited nodes. Initialize it with false values.
- Create a queue for BFS traversal.
- Mark the start node as visited and enqueue it.
- Perform BFS traversal using a loop that continues until the queue is empty:
- Dequeue a node from the queue and process or print it.
- Enqueue all adjacent nodes of the dequeued node that are not yet visited by checking the visited array.
- Print the BFS traversal.

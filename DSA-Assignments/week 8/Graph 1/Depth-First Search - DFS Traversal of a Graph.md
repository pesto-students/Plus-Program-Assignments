## Problem Statement:
Depth-First Search - DFS Traversal of a Graph

## Problem Statement:
Write a program to perform a depth-first search (DFS) traversal on a given graph. Given the graph as an adjacency list, your task is to traverse the graph using DFS and process or print each visited node in the order it is visited.


## Input Format:
Write a program to perform a depth-first search (DFS) traversal on a given graph. Given the graph as an adjacency list, your task is to traverse the graph using DFS and process or print each visited node in the order it is visited.

## Output Format:
The program prints the DFS traversal of the graph.


## Test Case 1:
Sample Input:
1,2;0,3,4;0,5;1;1;2

Sample Output:
0 1 3 4 2 5

## Test Case 2:
sample input: 
1,2;0;0

sample output:
0 1 2
## Level: Easy

## Hints:
- Use recursion to perform DFS.
Start with the start node and mark it as visited.
Process or print the start node.
- Traverse all adjacent nodes of the start node recursively.
Repeat the above steps for each unvisited adjacent node.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the dfsTraversal function that takes the adjacency list and the start node as input.
- Create a visited array of size graph.length to track visited nodes. Initialize it with false values.
- Implement a recursive function dfs that takes a node as input.
- Mark the current node as visited.
- Process or print the current node.
- Traverse all adjacent nodes of the current node recursively using a loop:
- If an adjacent node is not visited, recursively call dfs on that adjacent node.
- Call the dfs function with the start node as the initial call.
- Print the DFS traversal.

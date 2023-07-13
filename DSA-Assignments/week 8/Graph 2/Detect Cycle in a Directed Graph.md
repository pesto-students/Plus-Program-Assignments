## Problem Statement:
Detect Cycle in a Directed Graph

## Problem Statement:
Write a program to detect whether a directed graph contains a cycle or not. Given the graph as an adjacency list, your task is to determine if there is a cycle present in the graph.


## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.

## Output Format:
The program prints true if the graph contains a cycle, and false otherwise.

## Test Case 1:
Sample Input:
1,2;2,3;3,0;0,1

Sample Output:
true

## Test Case 2:
sample input: 
1;2;0

sample output:
false

## Level: Easy

## Hints:
- Use Depth-First Search (DFS) to traverse the graph and detect cycles.
Maintain a visited array to keep track of visited nodes during the traversal.
- Use a recursion stack to keep track of the nodes currently in the recursive call stack.
If a visited node is encountered again during the DFS traversal and is in the recursion stack, then a cycle is present.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an - adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the hasCycle function that takes the adjacency list as input.
- Initialize variables visited and recursionStack arrays of size graph.length to track visited nodes and nodes in the recursion stack, respectively.
- Perform depth-first search starting from each unvisited node:
- If a node is not visited and a cycle is found during the DFS traversal, return true.
- Implement a recursive function dfs that takes a node as input:
- Mark the node as visited and add it to the recursion stack.
- Traverse all adjacent nodes of the current node:
- If an adjacent node is not visited and a cycle is found during the recursive call, return true.
- If an adjacent node is already in the recursion stack, return true.
- Remove the current node from the recursion stack and return false.
- Return false if no cycle is found during the depth-first search.

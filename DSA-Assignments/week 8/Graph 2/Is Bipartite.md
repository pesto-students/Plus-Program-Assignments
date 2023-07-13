## Problem Statement:
Is Bipartite

## Problem Statement:
Write a program to determine whether an undirected graph is bipartite or not. Given the graph as an adjacency list, your task is to check if the graph can be divided into two sets of nodes such that there are no edges between nodes of the same set.


## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.

## Output Format:
The program prints true if the graph is bipartite, and false otherwise.

## Test Case 1:
Sample Input:
1,3;0,2;1,3;0,2

Sample Output:
true

## Test Case 2:
sample input: 
1,2;0,2;0,1

sample output:
false

## Level: Easy

## Hints:
- Use Depth-First Search (DFS) to traverse the graph and assign colors to the nodes.
Start from any unvisited node and assign it a color (e.g., 1).
- Traverse all the adjacent nodes of the current node and assign them the opposite color (e.g., 2).
If any adjacent node is already visited and has the same color as the current node, the graph is not bipartite.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the isBipartite function that takes the adjacency list as input.
- Initialize arrays colors and visited of size graph.length to track the colors assigned to each node and visited status of each node, respectively.
- Perform depth-first search starting from each unvisited node:
- If a cycle is found during the DFS traversal or any adjacent nodes have the same color as the current node, return false.
- Implement a recursive function dfs that takes a node and its color as input:
- Mark the node as visited and assign the color to it.
- Traverse all adjacent nodes of the current node:
- If an adjacent node is not visited and assigning a color to it results in a cycle or adjacent nodes having the same color, return false.
- Return true if no cycle is found.
- Return true if the graph is bipartite.

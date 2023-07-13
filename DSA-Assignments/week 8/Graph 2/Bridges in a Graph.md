## Problem Statement:
Bridges in a Graph

## Problem Statement:
Write a program to find all the bridges (or cut edges) in an undirected graph. Given the graph as an adjacency list, your task is to identify the edges whose removal would increase the number of connected components in the graph.


## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.

## Output Format:
The program prints the bridges (cut edges) in the graph as an array of arrays.

## Test Case 1:
Sample Input:
1,2;0,2;0,1,3,4;2,4;2,3

Sample Output:
[[2, 3], [2, 4]]

## Test Case 2:
sample input: 
1,-1;2;-2
2

sample output:
[Infinity, Infinity, 0]
[null, 0, null]

## Level: Medium

## Hints:
- Use Depth-First Search (DFS) to traverse the graph and identify the bridges.
Start from any unvisited node and assign an id to each visited node.
- Maintain a low array to store the lowest id reachable from each node during the DFS traversal.
For each edge (u, v), if ids[u] < low[v], it means removing this edge will increase the number of connected components, and it is a bridge.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the findBridges function that takes the adjacency list as input.
- Initialize arrays visited, ids, and low of size graph.length to track the visited status, ids, and lowest reachable ids of each node, respectively.
- Initialize a variable id to assign an id to each visited node.
- Perform depth-first search starting from each unvisited node:
- If an edge (u, v) is a bridge (cut edge), add [u, v] to the bridges array.
- Return the bridges array.

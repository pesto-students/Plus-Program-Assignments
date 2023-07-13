## Problem Statement:
Bellman-Ford Algorithm - Find the Shortest Path in a Weighted, Directed Graph with Negative Edge Weights

## Problem Statement:
Write a program to find the shortest path in a weighted, directed graph that may contain negative edge weights using the Bellman-Ford algorithm. Given the graph as an adjacency list with weights, your task is to determine the shortest path from a given source node to all other nodes in the graph.


## Input Format:
The user is prompted to enter the graph as an adjacency list with weights, where each row represents a node, and each comma-separated value represents a weighted edge from the current node to the adjacent node. The rows are separated by semicolons.

## Output Format:
The program prints the distances and predecessors arrays

## Test Case 1:
Sample Input:
1,6,2,3;-1;2,-2,3,4;-3
0

Sample Output:
[0, 3, 5, 2]
[null, 2, 0, 1]

## Test Case 2:
sample input: 
1,-1;2;-2
2

sample output:
[Infinity, Infinity, 0]
[null, 0, null]

## Level: Medium

## Hints:
- Initialize an array to store the distances from the source node to each node, setting the distance of the source node to 0 and all other distances to infinity.
Perform relaxation of edges repeatedly for a total of numNodes - 1 times.
During each relaxation step, iterate over all edges and update the distances and predecessors if a shorter path is found.
- After numNodes - 1 relaxation steps, check for negative cycles by iterating over all edges again.
If a negative cycle is found during the second iteration, return a message indicating the presence of a negative cycle.
Otherwise, return the distances and predecessors arrays.

## Approach:
- Take input from the user as an adjacency list with weights, where each row represents a node, and each comma-separated value represents a weighted edge from the current node to the adjacent node.
- Parse the input into an adjacency list with weights.
- Implement the shortestPath function that takes the adjacency list and the source node as input.
- Initialize arrays distances and predecessors of size graph.length to store the shortest distances and predecessors, respectively.
- Initialize the distance from the source node to itself as 0, and all other distances as infinity.
- Perform relaxation of edges repeatedly for a total of graph.length - 1 times:
- Iterate over all nodes and their adjacent nodes:
- If a shorter path is found, update the distance and predecessor arrays.
- Check for negative cycles by iterating over all edges again:
- If a shorter path is found, return "Graph contains negative cycle".
- Return an object containing the distances and predecessors arrays.

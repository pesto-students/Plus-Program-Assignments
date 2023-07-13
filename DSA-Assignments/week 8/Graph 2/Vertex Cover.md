## Problem Statement:
Vertex Cover

## Problem Statement:
Write a program to find the minimum vertex cover in a graph. Given the graph as an adjacency list, your task is to determine the smallest set of vertices such that every edge in the graph is incident to at least one vertex in the set.

## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.

## Output Format:
The program prints the minimum vertex cover as an array.

## Test Case 1:
Sample Input:
1,2;0,2;0,1,3,4;2,4;2,3

Sample Output:
[0, 1, 2, 3]

## Test Case 2:
sample input: 
1,3;0,2;1,3;0,2

sample output:
[0, 1]

## Level: Hard

## Hints:
- The Vertex Cover problem is known to be NP-hard, but you can use a greedy algorithm to find an approximate solution.
The Greedy algorithm starts by selecting an edge and including its two endpoints in the vertex cover.
- Repeat this process by selecting the next edge that is incident to an unselected vertex.
Stop when all edges have been covered.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the findMinVertexCover function that takes the adjacency list as input.
- Initialize an array visited of size graph.length to track the visited status of each node.
- Initialize an array vertexCover to store the vertices in the minimum vertex cover.
- Perform a Greedy algorithm to find the minimum vertex cover:
- Iterate over each node in the graph.
- If the node is not visited, iterate over its adjacent nodes.
- If an adjacent node is not visited, mark both the current node and the adjacent node as visited, and add them to the vertex cover array.
- Return the vertex cover array.

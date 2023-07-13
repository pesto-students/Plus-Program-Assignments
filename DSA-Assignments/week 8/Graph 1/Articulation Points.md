## Problem Statement:
Articulation Points

## Problem Statement:
Write a program to find all the articulation points in an undirected graph. Given the graph as an adjacency list, your task is to find and return a list of all the nodes that are articulation points in the graph.

## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.


## Output Format:
The program prints the list of all the nodes that are articulation points in the graph.



## Test Case 1:
Sample Input:
1,2;0,2;0,1,3,5;2,4;3,5;2,4

Sample Output:
[2, 3]

## Test Case 2:
sample input: 
1,2;0;0

sample output:
[0]

## Level: Medium

## Hints:
- Use Tarjan's algorithm to find articulation points in an undirected graph.
Use a depth-first search (DFS) traversal to visit all the nodes in the graph.
Keep track of the depth of each node during the DFS traversal.
- For each node, determine the lowest depth that can be reached from its subtree.
If the lowest depth of any adjacent node is greater than or equal to the current node's depth, then the current node is an articulation point.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the findArticulationPoints function that takes the adjacency list as input.
- Initialize variables visited, low, ids, parent, and isArticulationPoint arrays of size graph.length to track visited nodes, lowest depth of each node, node IDs, parent nodes, and whether a node is an articulation point or not, respectively.
- Implement a recursive function dfs that takes a node and its root as input.
- Mark the current node as visited and assign an ID and lowest depth to it.
- Keep track of the number of children and whether the current node is an articulation point.
- Traverse all adjacent nodes of the current node:
- If an adjacent node is the parent of the current node, skip it.
- If the adjacent node is not visited, set its parent, recursively call dfs on it, and update the lowest depth and articulation point status of the current node.
- If the adjacent node is visited, update the lowest depth of the current node.
Determine if the current node is an articulation point based on the conditions:
- If the current node is the root and has more than one child, it is an articulation point.
- If the current node is not the root and has a child with a lowest depth greater than or equal to its own depth, it is an articulation point.
- Collect all the articulation points in the articulationPoints array.
- Return the articulationPoints array.

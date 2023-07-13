## Problem Statement:
Topological Sort algorithm

## Problem Statement:
 Implement the Topological Sort algorithm to sort a directed acyclic graph (DAG) represented by its adjacency matrix. Topological Sort finds a linear ordering of the vertices in a DAG such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.


## Input Format:
The input should be taken from the user as a directed acyclic graph represented by its adjacency matrix. The adjacency matrix is a 2D array where the value at matrix[i][j] is 1 if there is a directed edge from vertex i to vertex j, and 0 otherwise.


## Output Format:
The sorted vertices should be displayed as the output.


## Test Case 1:
Sample Input:
- 5
- 0 1 0 0 0
- 0 0 1 1 0
- 0 0 0 1 1
- 0 0 0 0 1
- 0 0 0 0 0

Sample Output:
0 -> 1 -> 2 -> 3 -> 4




## Test Case 2:
sample input: 
- 4
- 0 1 1 0
- 0 0 0 0
- 0 0 0 1
- 0 0 0 0

sample output:
0 -> 1 -> 2 -> 3


## Level: Medium

## Hints:
- Use Depth-First Search (DFS) to perform the Topological Sort.
Keep track of visited vertices to avoid cycles in the graph.
- Use a stack to store the vertices in the correct order after the DFS traversal.

## Approach:
- Prompt the user to enter the number of vertices and the adjacency matrix of the DAG.
- Initialize a stack to store the sorted vertices and an array to keep track of visited vertices.
- Perform a Depth-First Search (DFS) on the DAG starting from each unvisited vertex.
- During DFS traversal, for each vertex, recursively visit its neighbors and push the current vertex to the stack after all its - neighbors have been visited.
- Finally, pop the vertices from the stack to get the topological sort order.


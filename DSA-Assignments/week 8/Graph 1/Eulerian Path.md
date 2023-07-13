## Problem Statement:
Eulerian Path

## Problem Statement:
Write a program to determine if a given directed graph has an Eulerian path or circuit. Given the graph as an adjacency list, your task is to check if the graph has an Eulerian path or circuit and return the corresponding result.

## Input Format:
The user is prompted to enter the graph as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node. The rows are separated by semicolons.

## Output Format:
The program prints true if the graph has an Eulerian path or circuit, and false otherwise.

## Test Case 1:
Sample Input:
1,2;2,3;3,0;0,1

Sample Output:
true

## Test Case 2:
sample input: 
1,2;2,3;3,0;0,1,4;4

sample output:
false

## Level: Medium

## Hints:
- In an Eulerian path or circuit, every node has equal in-degree and out-degree, except for at most two nodes:
One node has out-degree - in-degree = 1 (starting node).
One node has in-degree - out-degree = 1 (ending node).
All other nodes have in-degree = out-degree.
Iterate through all the nodes of the graph and check the conditions for an Eulerian path or circuit.
- Count the number of nodes with out-degree - in-degree = 1 (starting node) and in-degree - out-degree = 1 (ending node).
If there is exactly one starting node and one ending node, it is an Eulerian path.
If there are no starting or ending nodes, it is an Eulerian circuit.
If any of the above conditions are not met, the graph does not have an Eulerian path or circuit.

## Approach:
- Take input from the user as an adjacency list, where each row represents a node, and each comma-separated value represents an adjacent node of that node.
- Parse the input into an adjacency list.
- Implement the hasEulerianPathOrCircuit function that takes the adjacency list as input.
- Initialize arrays inDegrees and outDegrees of size graph.length to track the in-degrees and out-degrees of each node, respectively.
- Calculate the in-degrees and out-degrees of each node by traversing the adjacency list.
- Initialize variables startNode, endNode, outMinusIn, and inMinusOut to track the number of starting nodes, ending nodes, out-degree minus in-degree, and in-degree minus out-degree, respectively.
- Traverse all nodes of the graph and check the conditions for an Eulerian path or circuit:
- If a node has unequal in-degree and out-degree, return false.
- If a node has out-degree minus in-degree = 1, update outMinusIn and startNode.
- If a node has in-degree minus out-degree = 1, update inminusOut and endNode.
- Check if the graph has an Eulerian path or circuit based on the following conditions:
- If outMinusIn is 1 and inMinusOut is 1, it has an Eulerian path.
- If outMinusIn is 0 and inMinusOut is 0, it has an Eulerian circuit.
- Otherwise, it does not have an Eulerian path or circuit.
- Return the result.

## Problem Name:
merge two sorted linked lists

## Problem Statement:
Write a JavaScript function to merge two sorted 
linked lists into a single sorted linked list.


## Input Format:
The first line input contains spaced-separated 
integers representing the elements of an array.

The second line contains also contains spaced-separated 
integers representing the elements of an array.

## Output Format:
The output should be an 
array representing the 
merged sorted linked list.

## Test Case 1:
sample Input
1 3 5
2 4 6

Sample Output
[1, 2, 3, 4, 5, 6]

## Test Case 2:
1 2 4
3 5 6

Sample output:
[1, 2, 3, 4, 5, 6]

## Level: Medium

## Hints:
- Create a new linked list to store the merged result.
Traverse both linked lists simultaneously, comparing the values of nodes.
Append the smaller value to the merged linked list.

- Move the pointer of the corresponding linked list to the next node.
Continue this process until one of the linked lists reaches its end.
Append the remaining nodes of the non-empty linked list to the merged linked list.

## Approach:
Create a function to represent a node in the linked list.
Create a function to merge two sorted linked lists.
Create a new head and current pointer for the merged linked list.
Traverse both linked lists simultaneously:
Compare the values of the current nodes in the linked lists.
Append the smaller value to the merged linked list.
Move the pointer of the corresponding linked list to the next node.
If any linked list reaches its end, append the remaining nodes of the non-empty linked list to the merged linked list.
Return the merged linked list.
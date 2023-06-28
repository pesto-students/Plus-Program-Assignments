## Problem Name:
Reverse every k nodes

## Problem Statement:
Implement a JavaScript function to reverse every k nodes in a linked list.


## Input Format:
The first line input contains spaced-separated 
integers representing the elements of an array.

The second line contains a positive integer k.

## Output Format:
The output should be an 
array representing the 
modified linked list after 
reversing every k nodes.

## Test Case 1:
sample Input
1 2 3 4 5 6 7 8
3

Sample Output
[3, 2, 1, 6, 5, 4, 8, 7]

## Test Case 2:
1 2 3 4 5
2

Sample output:
[2, 1, 4, 3, 5]

## Level: Medium

## Hints:
- Traverse the linked list in chunks of size k.
Reverse each chunk of nodes.

- Connect the reversed chunks to form the 
final modified linked list.

## Approach:
Create a function to reverse a linked list.
Create a function to reverse every k nodes in a linked list.
Initialize a pointer to the head of the linked list.
Traverse the linked list in chunks of size k:
Reverse each chunk using the reverse function.
Connect the reversed chunk to the previous chunk (if any).
Update the pointers accordingly.
Return the modified linked list.
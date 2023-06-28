## Problem Name:
Subtract Two Numbers represented as Linked Lists

## Problem Statement:
You are given two linked lists that represent 
two non-negative integers. The digits are stored in 
reverse order, and each node of the linked list contains 
a single digit. Your task is to subtract the second 
linked list from the first linked list and return the result
 as a new linked list.

Write a JavaScript program that takes input for the 
two linked lists and performs the subtraction 
operation.


## Input Format:
The program should prompt the user to enter the
 elements of the first linked list and the second 
linked list. The elements should be separated 
by spaces.

## Output Format:
The program should display
the result of the subtraction
operation as a linked list.

## Test Case 1:
sample Input
3 2 1
1 2

Sample Output
2 9

## Test Case 2:
Sample input:
5 0
5

Sample output:
0 5

## Level: Hard

## Hints:
- Traverse both linked lists simultaneously.
At each step, subtract the corresponding digits from the 
linked lists, taking into account any borrow from the 
previous step.
If the result of subtraction is negative, add 10 to the result
and set the borrow flag to 1.

- Create a new linked list to store the 
result digits.
Repeat steps 2-4 until both linked lists are 
exhausted.
Return the resulting linked list.


## Approach:
Create a Node class to represent a node in the linked list. 
Each node should have a data property and a next pointer to the next node.
Create a LinkedList class with a head pointer initially set to null.
Implement the insert method in the LinkedList class to add 
elements to the linked list. If the head is null, set the head to the new node; 
otherwise, traverse the list until the last node and append the new node.
Implement the subtract method in the LinkedList class to subtract the 
second linked list from the first linked list. Follow the hints and approach 
mentioned above to perform the subtraction operation.
Implement the toString method in the LinkedList class to convert the linked 
list into a string representation.
Implement the subtractLinkedLists function as the main program. 
Prompt the user to enter the elements of the first and second linked lists, 
create instances of the LinkedList class, insert the elements into the linked lists, 
perform the subtraction operation, and display the result.
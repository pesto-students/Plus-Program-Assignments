## Problem Name:
Find intersection point of Y LinkedList

## Problem Statement:
You are given two linked lists, list1 and list2. Your task
 is to find the intersection point of these two linked 
lists, if it exists. The intersection point is defined as 
the node at which both lists merge and become 
common.

Write a program that takes input for the elements of 
list1 and list2, and finds the intersection point. If there
 is no intersection point, the program should output 
"No Intersection Point".


## Input Format:
You are given two linked lists, list1 and list2. Your task
 is to find the intersection point of these two linked 
lists, if it exists. The intersection point is defined as 
the node at which both lists merge and become 
common.

Write a program that takes input for the elements of 
list1 and list2, and finds the intersection point. If there
 is no intersection point, the program should output 
"No Intersection Point".

## Output Format:
The program displays the 
intersection point of the two 
linked lists or 
"No Intersection Point" if 
there is no intersection.

## Test Case 1:
sample Input
3 6 9 12 15
10 11

Sample Output
No Intersection Point

## Test Case 2:
Sample input:
3 6 9 12 15
10 11 12 15

Sample output:
12

## Level: Easy

## Hints:
- Traverse both linked lists and calculate their 
lengths.Get the difference between the lengths of the 
two lists.

- Move the pointer of the longer list by the 
difference obtained in the previous step.
Traverse both lists in parallel until the pointers 
meet. The meeting point will be the intersection 
point.


## Approach:
Create a Node class to represent a node in the linked list. Each node should have a 
data property and a next pointer to the next node.
Create a LinkedList class with a head pointer initially set to null.
Implement the insert method in the LinkedList class to add elements to the linked list. 
If the head is null, set the head to the new node; otherwise, traverse the list until the 
last node and append the new node.
Implement the findIntersectionPoint method in the LinkedList class to find the intersection 
point of the current list with another list. Follow the approach mentioned above to 
determine the intersection point.
Prompt the user to enter elements for both list1 and list2.
Call the findIntersectionPoint method on list1, passing list2 as an argument.
Display the intersection point if it exists; otherwise, display "No Intersection Point".
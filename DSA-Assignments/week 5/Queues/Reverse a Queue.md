## Problem Name:
Reverse a Queue

## Problem Statement:
You are given a queue of integers. 
Your task is to reverse the order of elements in the 
queue using a stack.

Write a function reverseQueue() that reads a series 
of space-separated integers representing the 
elements of the queue from the user and prints the 
reversed queue.


## Input Format:
Input:
The input consists of a single line containing a 
series of space-separated integers representing 
the elements of the queue.

## Output Format:
Output:
Print the reversed queue as a 
space-separated list of integers.

Note:
The input queue can contain duplicate elements.
You can assume that the input queue is not empty.

## Test Case 1:
sample Input
1 2 3 4 5

Sample Output
5 4 3 2 1

## Test Case 2:
Sample input:
10 20 30 40 50

Sample output:
50 40 30 20 10

## Level: Easy

## Hints:
- Use an array to represent the queue.
You can reverse the queue by using a stack 
data structure.

- Pop elements from the queue and push them 
onto the stack.
Then pop elements from the stack and enqueue
 them back into the queue.


## Approach:
Read the input queue from the user.
Split the input string into an array of integers.
Create an empty stack and an empty queue.
Enqueue all elements of the input array into the queue.
While the queue is not empty, dequeue an element and push it onto the stack.
While the stack is not empty, pop an element and enqueue it back into the queue.
Print the reversed queue.
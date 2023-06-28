## Problem Name:
Reverse K Elements in Queue

## Problem Statement:
You are given a queue of integers and a positive 
integer K. Your task is to reverse the order of the first 
K elements in the queue, while keeping the remaining
 elements in the same order.

Write a function reverseKElements(queue, K) that 
takes two parameters:

queue: An array representing the queue of integers.
K: A positive integer indicating the number of elements 
to be reversed.
The function should return the modified queue after 
reversing the first K elements.


## Input Format:
The input consists of two lines:

The first line contains a series of space-separated
 integers representing the elements of the queue.
The second line contains a single integer K.

## Output Format:
Print the queue after reversing the 
first K elements as a space-separated
 list of integers.

Note:
The input queue can contain duplicate elements.
You can assume that the input queue is not empty.

## Test Case 1:
sample Input
1 2 3 4 5 6 7
3

Sample Output
3 2 1 4 5 6 7

## Test Case 2:
Sample input:
10 20 30 40 50
2

Sample output:
20 10 30 40 50

## Level: Medium

## Hints:
- Use an array to represent the queue.
You can use an additional stack data structure to 
reverse the first K elements.
Dequeue the first K elements from the queue 
and push them onto the stack.

- Pop elements from the stack and enqueue 
them back into the queue.
Finally, enqueue the remaining elements from 
the original queue back into the modified queue.


## Approach:
Read the input queue from the user.
Split the input string into an array of integers representing the queue.
Read the value of K from the user.
Create an empty stack and an empty queue.
Dequeue the first K elements from the queue and push them onto the stack.
Pop elements from the stack and enqueue them back into the queue.
Enqueue the remaining elements from the original queue back into the modified queue.
Print the modified queue.
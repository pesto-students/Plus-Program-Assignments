## Problem Name:
Queue Rearrangement

## Problem Statement:
You are given a queue containing a series of integers.
Rearrange the queue in such a way that all even 
numbers are moved to the front, while odd numbers 
remain in their original order. Maintain the relative 
order of the even numbers and the odd numbers.


## Input Format:
The user will be asked to enter the elements of 
the queue separated by spaces.

## Output Format:
The function should return an 
array representing the rearranged 
queue.

## Test Case 1:
sample Input
5 2 8 3 9 4

Sample Output
[2, 8, 5, 3, 9, 4]

## Test Case 2:
Sample input:
2 4 6 8 10

Sample output:
[2, 4, 6, 8, 10]

## Level: Easy

## Hints:
- Create two separate queues to hold the even and 
odd numbers.

- Iterate through the original queue and enqueue 
each element into the appropriate queue based
on its parity.
Finally, concatenate the even queue with the 
odd queue to get the rearranged queue.


## Approach:
Initialize two empty arrays: evenQueue and oddQueue.
Split the user input string by spaces and convert it into an array of integers 
representing the initial queue.
Iterate through the initial queue and enqueue each element into either the 
evenQueue or oddQueue based on its parity.
Concatenate the evenQueue with the oddQueue to get the rearranged queue.
Return the rearranged queue.
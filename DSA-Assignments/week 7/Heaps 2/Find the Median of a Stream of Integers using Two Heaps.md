## Problem Statement:
Find the Median of a Stream of Integers using Two Heaps

## Problem Statement:
Write a program to find the median of a stream of integers using two heaps. The program should maintain two heaps, a max heap and a min heap, to efficiently calculate the median as new integers are added to the stream. The median is the middle value of a set of numbers, which divides the set into two equal halves.


## Input Format:
The user is prompted to enter a stream of integers, separated by spaces.


## Output Format:
The program prints the median of the stream of integers.



## Test Case 1:
Sample Input:
5 10 2 8 15

Sample Output:
8

## Test Case 2:
sample input: 
10 20 30 40 50

sample output:
30

## Level: Medium

## Hints:
- Use two heaps: a max heap to store the smaller half of the stream and a min heap to store the larger half.
Maintain the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1.
- Insert the incoming integer into the appropriate heap and balance the heaps if necessary.
Update the current median based on the sizeof the heaps.


## Approach:
- Take input from the user as a stream of integers, separated by spaces.
- Implement two heap data structures: MaxHeap and MinHeap.
- Implement the findMedian function that takes the stream as input.
- Initialize the maxHeap and minHeap.
- Initialize the median variable as null.
- Iterate through each integer in the stream:
- a. If the maxHeap is empty or the number is less than the current median, insert it into the maxHeap.
- b. Otherwise, insert it into the minHeap.
- c. Balance the heaps to maintain the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1.
- d. Update the current median based on the size of the heaps:
If the sizes are equal, calculate the average of the maximum value in maxHeap and the minimum value in minHeap.
If the size of maxHeap is greater, the median is the maximum value in maxHeap.
- e. Return the median.
- Print the median.

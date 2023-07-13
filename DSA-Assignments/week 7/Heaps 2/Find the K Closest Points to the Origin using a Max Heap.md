## Problem Statement:
Find the K Closest Points to the Origin using a Max Heap

## Problem Statement:
Write a program to find the K closest points to the origin (0, 0) in a 2D plane using a max heap. Given a list of points in the form (x, y), your task is to find the K points closest to the origin. The distance between two points (x1, y1) and (x2, y2) is calculated using the Euclidean distance formula: sqrt((x2 - x1)^2 + (y2 - y1)^2).


## Input Format:
The user is prompted to enter the value of k (the number of closest points to find).
The user is prompted to enter the points as x,y coordinates, separated by spaces. Each point should be in the format x,y.


## Output Format:
The program prints the k closest points to the origin (0, 0).




## Test Case 1:
Sample Input:
- 3
- 1,2 3,4 5,6 7,8 9,10

Sample Output:
- 1,2
- 3,4
- 5,6

## Test Case 2:
sample input: 
- 2
- 2,3 4,5 6,7 8,9 10,11

sample output:
- 2,3
- 4,5

## Level: Hard

## Hints:
- Calculate the distance between each point and the origin (0, 0).
Use a max heap to store the k closest points based on their distance.
If the max heap is not full or the distance is smaller than the maximum distance in the heap, insert the point into the heap.
- If the max heap is full, remove the point with the maximum distancefrom the heap.
Extract the k closest points from the max heap.


## Approach:
- Take input from the user for the value of k.
- Create an empty array points to store the points.
- Prompt the user to enter the points as x,y coordinates, separated by spaces.
- Split the input to get the individual points.
- Iterate through each point and split it to get the x and y coordinates.
- Implement a MaxHeap class to maintain the k closest points based on their distance.
- Implement the calculateDistance function to calculate the Euclidean distance between two points.
- Implement the findClosestPoints function that takes the points array and k as input.
- Create a maxHeap object to store the k closest points.
- Iterate through each point:
- Calculate the distance of the point from the origin (0, 0) using the calculateDistance function.
If the max heap is not full or the distance is smaller than the maximum distance in the heap, insert the point into the heap.
If the max heap is full, remove the point with the maximum distance.
- Extract the k closest points from the max heap.
- Return the closest points.
- Print the k closest points.

## Problem Statement:
Maximum Points on a Line

## Problem Statement:
Given a list of 2D points, write a function to find the 
maximum number of points that lie on the same line 
using hashing.


## Input Format:
An array of 2D points, represented as an array of 
arrays. Each inner array contains two integers 
representing the x and y coordinates of a point.


## Output Format:
An integer representing the maximum 
number of points that lie on the same 
line.


## Test Case 1:
sample Input
[[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]]

Sample Output
3

## Test Case 2:
Sample input: 
[[1, 1], [2, 2], [3, 3]]


Sample output:
3

## Level: Medium

## Hints:
- Use a hashmap to store the slopes of all possible 
lines formed by the points.
Handle the special case of vertical lines 
separately.
- Count the maximum number of points that lie 
on the same line.


## Approach:
- Initialize a variable to keep track of the maximum number of points on a line.
- Iterate over each point and calculate the slope with every other point.
- Store the slope in a hashmap along with the count of points that have the same slope.
- Update the maximum count of points for each slope.
- Consider the special case of vertical lines separately.
- Return the maximum count as the result.

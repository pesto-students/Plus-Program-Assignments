## Problem Statement:
Traveling Salesman Problem

## Problem Statement:
Write a program to solve the Traveling Salesman Problem (TSP). Given a list of cities and the distances between each pair of cities, your task is to find the shortest possible route that visits each city exactly once and returns to the starting city.

## Input Format:
Write a program to solve the Traveling Salesman Problem (TSP). Given a list of cities and the distances between each pair of cities, your task is to find the shortest possible route that visits each city exactly once and returns to the starting city.

## Output Format:
The program printsthe shortest route as an array.


## Test Case 1:
Sample Input:
0,2,9,10;1,0,6,4;15,7,0,8;6,3,12,0

Sample Output:
[0, 1, 3, 2, 0]

## Test Case 2:
sample input: 
0,5,8,6;5,0,10,15;8,10,0,12;6,15,12,0

sample output:
[0, 3, 1, 2, 0]

## Level: Hard

## Hints:
- The Traveling Salesman Problem is known to be NP-hard, so an optimal solution may require an exponential amount of time.
- The brute force approach involves generating all possible permutations of the cities and calculating the total distance for each permutation.
Keep track of the shortest route and its distance as you iterate through all the permutations.

## Approach:
- Take input from the user as a 2D array representing the cities and their distances. Each row represents a city, and each comma-separated value represents the distance between two cities.
- Parse the input into a 2D array representing the cities and their distances.
- Implement the findShortestRoute function that takes the cities array as input.
- Initialize variables shortestRoute and shortestDistance to track the shortest route and its distance, respectively. Set the initial shortest distance to infinity.
- Implement a function getPermutations that generates all possible permutations of an array.
- Implement a function swap that swaps two elements in an array.
- Implement a function calculateDistance that calculates the total distance of a route.
- Generate all possible permutations of the cities using the getPermutations function.
- Iterate over each permutation and calculate the total distance using the calculateDistance function.
- Update the shortest route and distance if a shorter route is found.
- Return the shortest route.

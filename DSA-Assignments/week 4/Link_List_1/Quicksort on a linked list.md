## Problem Name:
Quicksort on a linked list

## Problem Statement:
Write a JavaScript function to perform quicksort on 
a linked list and return a single-level sorted linked list.


## Input Format:
The input will be an array
representing a linked list.

## Output Format:
The output should be an 
array representing the 
sorted linked list.

## Test Case 1:
Sample Input:
[3, 1, 4, 2, 5]

Sample Output:
[1,2,3,4,5]


## Test Case 2:
[100,200,50,150,75]

Sample output:
[1, 2, 3, 4, 5, 6]

## Level: Hard

## Hints:
- Implement the partition function to choose a pivot 
element and rearrange the elements around it.
Use the quicksort algorithm to recursively sort the 
elements before and after the pivot.

- Maintain two separate lists for the elements 
less than the pivot and greater than the pivot.     
Join the sorted sublists along with the pivot 
element to obtain the final sorted list.

## Approach:
Create a function to perform quicksort on a linked list.
Check the base case:
If the linked list has fewer than two elements, return the list as it is already sorted.
Choose a pivot element. It can be the first element, the last element, or a random element.
Partition the list around the pivot by rearranging the elements into two sublists: less than the pivot and greater than the pivot.
Recursively perform quicksort on the sublists before and after the pivot.
Join the sorted sublists along with the pivot element to obtain the final sorted list.
Return the sorted list.
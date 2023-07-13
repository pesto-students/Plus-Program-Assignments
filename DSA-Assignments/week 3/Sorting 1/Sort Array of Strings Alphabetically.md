## Problem Statement:
Sort Array of Strings Alphabetically

## Problem Statement:
Write a JavaScript function that takes an array of strings as input and sorts it in alphabetical order using the Selection Sort algorithm. Implement the function with the name selectionSortStrings.


## Input Format:
An array arr containing n strings.

## Output Format:
The sorted array of strings in alphabetical order.

## Test Case 1:
Sample Input:
banana,apple,grape,cherry

Sample Output:
['apple', 'banana', 'cherry', 'grape']


## Test Case 2:
sample input: 
cat,dog,elephant,bear

sample output:
['bear', 'cat', 'dog', 'elephant']

## Level: Easy

## Hints:
- The Selection Sort algorithm works by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning of the sorted part.
- Use a nested loop to compare each element with the rest of the array and find the minimum.
Swap the minimum element with the current element in each iteration.

## Approach:
- Start with the first element as the current minimum.
- Iterate through the array and find the minimum element by comparing it with each subsequent element.
- Swap the minimum element with the current element.
- Move to the next element and repeat steps 2 and 3 until the array is sorted.

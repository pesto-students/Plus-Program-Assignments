## Problem Statement:
Intersection of Two Arrays

## Problem Statement:
Take 2 arrays from as an input and return the
intersection of the two arrays.
Intersection is the common elements in both
the arrays.


## Input Format:
- First Line contains comma separated numbers representing the elements of an array
- Second Line contains comma separated numbers representing the elements of an array


## Output Format:
An Array of intersected elements

## Test Case 1:
Sample Input:
- 1,2,3,4,5
- 4,5,6,7,8

Sample Output:
[4, 5]

## Test Case 2:
Example input:
- 1,2,3,4,5
- 5,4,3,2,1

Example output:
[1, 2, 3, 4, 5]

## Level: Medium

## Hints:
- Use a Set data structure to store the 
elements of one array
- Iterate over the other array and 
check if each element exists in the 
Set.If an element is found in the 
Set, add it to the intersection array.

## Approach:
- step 1 - Create a new Set using the elements of one array.
- step 2 - Initialize an empty intersection array.
- step 3 - Iterate over the elements of the other array.
- step 4 - For each element, check if it exists in the Set.
- step 5 - If it does, add it to the intersection array and remove it from the Set.
- step 6 - At the end, the intersection array will contain the common elements.
- step 7 - Return the intersection array.


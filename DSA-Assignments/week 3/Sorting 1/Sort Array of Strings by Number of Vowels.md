## Problem Statement:
Sort Array of Strings by Number of Vowels


## Problem Statement:
Write a JavaScript function that takes an array of strings as input and sorts it based on the number of vowels in each string using the Cocktail Shaker Sort algorithm. Implement the function with the name cocktailShakerSort.


## Input Format:
Prompt the user to enter the strings as a comma-separated string.


## Output Format:
Print each string in the sorted array on a new line.



## Test Case 1:
Sample Input:
apple,banana,pear,orange,kiwi

Sample Output:
kiwi
pear
apple
banana
orange


## Test Case 2:
sample input: 
red,yellow,green,blue

sample output:
red
blue
green
yellow

## Level: Medium

## Hints:
- Cocktail Shaker Sort, also known as Bidirectional Bubble Sort, is a variation of the Bubble Sort algorithm.
- It sorts the elements by repeatedly passing through the array in both directions, swapping adjacent elements if they are in the wrong order.

## Approach:
- Convert the comma-separated string of strings into an array of strings.
- Implement the Cocktail Shaker Sort algorithm to sort the strings based on the number of vowels in each string.
- Repeat the sorting process until the array is fully sorted.

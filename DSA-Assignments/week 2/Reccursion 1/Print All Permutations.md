## Problem Statement:
Print All Permutations

## Problem Statement:
Write a recursive function to print all permutations of 
a given string.


## Input Format:
The input is a string.

## Output Format:
The function should print all 
permutations of the input string.

## Test Case 1:
Sample Input:
abc

Sample Output:
abc
acb
bac
bca
cab
cba

## Test Case 2:
Sample input:
ab

Sample output:
ab
ba

## Level: Medium

## Hints:
- The problem can be solved using backtracking and recursion.
Think about how you can generate permutations by swapping characters in the string.  
- Use a recursive function that takes the input string, a starting index, and an empty array to store the permutations.

## Approach:
- Define a recursive function that takes the input string, a starting index, and an array to store permutations.
- Check if the starting index is equal to the length of the string. If so, add the current permutation to the array.
Otherwise, iterate over the characters from the starting index to the end of the string.
- For each character, swap it with the character at the starting index and recursively call the function with the incremented starting index.
- After the recursive call, swap back the characters to restore the original order.
- Repeat steps 3 to 5 for all characters at the starting index.
- Finally, call the recursive function with the input string, starting index as 0, and an empty array to store the permutations.
- Print the generated permutations.

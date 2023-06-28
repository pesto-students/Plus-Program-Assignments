## Problem Name:
Is Link List Pallindrome

## Problem Statement:
Implement a JavaScript function to check if a given
linked list is a palindrome.


## Input Format:
The input contains spaced-separated 
integers representing the elements of an array.

## Output Format:
The output 
should be a boolean value 
indicating whether the 
linked list is a palindrome 
or not.

## Test Case 1:
sample Input
1 2 3 2 1

Sample Output
true

## Test Case 2:
Sample input:
1 2 3 3 1

Sample output:
false

## Level: Easy

## Hints:
- Use a two-pointer approach to find the 
middle of the linked list.

- Reverse the second half of the linked list.
Compare the reversed second half with the first
 half to check for palindromicity.

## Approach:
Create a function to reverse a linked list.
Create a function to find the middle node of a linked list using the two-pointer technique.
Split the linked list into two halves using the middle node.
Reverse the second half of the linked list.
Compare the reversed second half with the first half by traversing both simultaneously.
If all the values match, return true (indicating a palindrome). Otherwise, return false.
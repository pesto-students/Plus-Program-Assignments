## Problem Name:
Simplify Directory Path

## Problem Statement:
Given an absolute path for a file or directory, simplify 
it. The absolute path can contain multiple slashes '/', 
a single dot '.', and a double dot '..'. The simplified 
path should have the following properties:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing slash '/'.
The path ".." means to move up one directory.


## Input Format:
Input:
The program should prompt the user to enter 
an absolute path as a string.

## Output Format:
Output:
The program should display the 
simplified path as a string.

## Test Case 1:
sample Input
/home/.././user//foo/../../bar

Sample Output
/bar

## Test Case 2:
Sample input:
/a/b/c

Sample output:
/a/b/c

## Level: Medium

## Hints:
- Use a stack to keep track of the directories.
Split the path by slashes '/' to get individual directories.
Iterate through the directories.
If the directory is a dot '.', ignore it.

- If the directory is a double dot '..', pop the top 
directory from the stack if it is not empty.
Otherwise, push the directory onto the stack.
Finally, construct the simplified path using the 
directories in the stack.


## Approach:
Prompt the user to enter an absolute path.
Split the input path by slashes '/' to get an array of directories.
Create an empty stack to store the simplified directories.
Iterate through each directory in the array.
If the directory is a dot '.', ignore it.
If the directory is a double dot '..', check if the stack is not empty. 
If it is not empty, pop the top directory from the stack.
Otherwise, push the directory onto the stack.
After iterating through all the directories, construct the simplified path using the directories in the stack.
Display the simplified path.
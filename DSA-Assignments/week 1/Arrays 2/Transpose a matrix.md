## Problem Name:
Transpose a matrix

## Problem Statement:
Take a 2d array as input and return the tranpose
of that 2d Matrix


## Input Format:
- First Line contains a number representing rows
- Second line - a number representing cols
- from Third line - elements

## Output Format:
tab separted matrix

## Test Case 1:
Example input:
- 2
- 2
- 1
2
3
4

Example output:
1        3
2        4

## Test Case 2:
Example input:
- 2
- 4
- 1
2
3
4
5
6
7
8

Example output:
1        5
2        6
3        7
4        8

## Level: Medium

## Hints:
- Create a function that takes rows and col
and use nested loop to get all the elements
Then switch the position of the the itrators
in order to tranpose a matrix

- for loop{ rows
    for loop{ cols
        take input elemets
    }
}

for loop{ cols
    for loop{ rows
        push into an empty array
    }
}



## Approach:
- Step 1 -The takeMatrixInput function prompts the user to enter the number of rows 
and columns for the matrix. It creates an empty matrix array.

- step 2 -It uses nested loops to collect the elements of the matrix from the user's 
input. Each element

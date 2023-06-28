## Problem Name:
Get Square root

## Problem Statement:
Find the square root of a given positive integer 
using binary search.


## Input Format:
The first line contains an integer N, 
representing the positive integer for 
which the square root needs to be found.

## Output Format:
Print a floating-point number
representing the square
root of the given integer,
rounded to 6 decimal places

## Test Case 1:
Sample Input:
16

Sample Output:
4.000000

## Test Case 2:
Sample input:
2

Sample output:
1.414214

## Level: Medium

## Hints:
- Consider using a binary search approach to 
narrow down the range of possible square roots.
Initialize the search range from 0 to the given
positive integer.

- Determine the middle value within the search 
range and square it.
Adjust the search range based on whether the 
squared value is greater than, less than, or 
equal to the target number.

## Approach:
Initialize variables start and end as 0 and the given positive integer, respectively.
Iterate while start is less than or equal to end:
Compute the middle value as mid = start + (end - start) / 2.
Compute the square of the middle value as midSquared = mid * mid.
If midSquared is equal to the target number, return mid rounded to 6 decimal places.
If midSquared is less than the target number, update start to mid + 1.
If midSquared is greater than the target number, update end to mid - 1.
If the loop completes without finding an exact square root, return the value of end 
rounded to 6 decimal places.
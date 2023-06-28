## Problem Name:
Max Product of a Subarray

## Problem Statement:
Take size of an array and elements as the input 
and find the maximum product of the subarray

## Input Format:
- First Line contains a number representing size of the input array
- from Second line - elements

## Output Format:
An Array with sub array of resulted elements

## Test Case 1:
Example input:
5
2
3
-2
4
5

Example output:
20

## Test Case 2:
Example input:
4
-1
-2
-3
-4

Example output:
24

## Level: Hard

## Hints:
- Consider using two variables, maxProduct and 
minProduct, to keep track of the maximum and 
minimum product of a subarray encountered so 
far.
Iterate through the array and update maxProduct
and minProduct at each index based on the 
current element and the previous products.
Update the maximum product (maxProduct) by 
taking the maximum of the current element, the
product of the previous maximum product and 
the current element, and the product of the 
previous minimum product and the current
element.
Call the function 2 times to create two matrix.
Then use loop to sum the values and push them
into an empty array.

- Update the minimum product (minProduct) 
by taking the minimum of the current element,
 the product of the previous maximum 
product and the current element, 
and the product of the previous 
minimum product and the current element.

Keep track of the maximum product 
encountered so far (result) and 
return it as the final result.


## Approach:
- step 1 - Initialize maxProduct, minProduct, and result with the first element of the 
array.

- step 2 -Iterate through the array starting from the second element.

- step 3 - If the current number is negative, swap maxProduct and minProduct since 
     multiplying by a negative number can change the maximum and minimum values.

- step 4 - Update maxProduct by taking the maximum of the current number, 
       the product of the previous maximum product and the current number, and the 
       product of the previous minimum product and the current number.

- step 5 - Update minProduct by taking the minimum of the current number, 
     the product of the previous maximum product and the current number, 
     and the product of the previous minimum product and the current number.

- step 6 - Update result by taking the maximum of result and maxProduct.

- step 7 - Return result as the maximum product of a subarray.

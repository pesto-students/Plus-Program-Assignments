Write the function divideArray() in script.js that has a single numbers parameter containing an array of integers. The function should divide numbers into two arrays, evenNums for even numbers and oddNums for odd numbers. Then the function should sort the two arrays and output the array values to the console.

Ex: The function call: 

let nums = [4, 2, 9, 1, 8]; divideArray(nums); 

produces the console output:

Even numbers: 2 

4 

8 

Odd numbers: 1 

9 

The program should output "None" if no even numbers exist or no odd numbers exist. Ex: The function call: 

let nums = [4, 2, 8]; divideArray(nums); 

produces the console output:

Even numbers: 2 

4 

8 

Odd numbers: None 

Hints: Use the push() method to add numbers to the evenNums and oddNums arrays. Supply the array sort() method a comparison function for sorting numbers correctly.

To test your code in your web browser, call divideArray() from the JavaScript console.

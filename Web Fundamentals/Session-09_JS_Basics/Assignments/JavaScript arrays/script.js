// Put your solution here

function divideArray(nums) {
    let evenNums = [], oddNums = [];
    for (let i in nums) {
        if (nums[i] % 2 === 0) {
            evenNums.push(nums[i])
        } else {
            oddNums.push(nums[i])
        }
    }
    console.log('Even numbers :', evenNums.length > 0 ? evenNums.sort() : 'None', 'Odd numbers  :', oddNums.length > 0 ? oddNums.sort() : 'None')
}
/* 
Given an array of integers nums and integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

/* 
Input Array of nums & Target
Output Array of indices

*/

// Single loop from other user submission.
const twoSum = (nums, target) => {
  let i = 0, compare = 1, indexes = [];
  console.log(nums)
  console.log(target)
  while (i < nums.length - 1) {
    if (i === compare) {
      console.log("indexes equal - adding to compare")
      compare++
      console.log(nums[compare])
      console.log(compare)
    } else if (nums[i] + nums[compare] === target) {
      indexes.push(i, compare);
      return indexes
    } else if (nums[compare] < target && compare < nums.length - 1){
      console.log("adding to compare")
      compare++
      console.log(nums[compare])
      console.log(compare)
    } else if (compare >= nums.length) {
      console.log("compare reached the end")
      console.log("adding one to index")
      console.log("setting compare to 1 more than index")
      i++
      compare = i + 1
      console.log(i)
      console.log(compare)
    } else {
      console.log("adding to compare")
      compare++
      console.log(nums[compare])
      console.log(compare)
    }
  }
  return indexes
};

// Example 1:
nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target));
console.log("Output: [0,1]")
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

// Example 2:
nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target));
console.log("Output: [1,2]")

//Example 3:
nums = [3, 3];
target = 6;
console.log(twoSum(nums, target));
console.log("Output: [0,1]")


nums = [3, 2, 3]
target = 6
console.log(twoSum(nums, target));
console.log("Output [0,2]")

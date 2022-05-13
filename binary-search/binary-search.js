/* 
Game Instructions:

While on vacation in Los Angeles, you scored tickets to the Price is Right, and you find yourself on Contestant Row!

Drew Carey is about to ask you to bid on the prize.

Goal:
You must find the number in the array of numbers that is closest to the prize value, without going over.

If all of the bids are over the prize value, return -1
*/

/* 
Inputs:
- number - prize value
- array of numbers - bids on the prize

Output:
- number - closest number to the prize value
*/

/* 
TODO 
- setup brute force solution
- setup binary search solution
*/

/* Initial Setup
This would be a good function scaffold to use for your interviews, giving the candidates a place to start that's easy to understand and work with.

function closestNumber (num, array) {
  let index = 0;
  let winningIndex = -1;

  while (index < array.length) {
    index++;
  }

  if (winningIndex === -1) {
    return -1
  } else {
    return array[winningIndex];
  }
};
*/

/* Brute Force Solution:
For an initial brute force solution, we can simply loop through the array and compare each number to the prize value.
The runtime of this is O(n).

function closestNumber (num, array) {
  let index = 0;
  let winningIndex = -1;
  let difference = num;
  
  while (index <= array.length) {
    
    if ((num - array[index]) <= difference && (num - array[index]) >= 0) {
      difference = (num - array[index]);
      winningIndex = index;
    }
    index++;
  }
  
  if (winningIndex === -1) {
    return -1
  } else {
    return array[winningIndex];
  }
};
*/
/* Binary Search Solution:
For a binary search solution, we can use a binary search to find the closest number to the prize value.

This will improve runtime by a factor of O(log n).

*/
function closestNumber (num, array) {
  let winningIndex = -1;
  let difference = num;

  // we need to sort the array to use binary search
  array = array.sort((a, b) => a - b);
  
  // we need a 3 pointer approach to track the start & end indexes, along with the middle of them, which will be set during each while loop.
  let start = 0;
  let end = array.length - 1;
  // Use Math.floor() to round down to the nearest whole number.
  let mid = Math.floor((start + end) / 2);

  // Three things need to happen here to handle the start & end pointers:
  // 1. We need to check if the mid index is the price of the prize.
  // If this is tru, then return the mid index.
  // 2. If the mid value is less than the price, then we need to set the start to the mid + 1.
  // If this is true, then we need to check if the difference between the price and the mid value is less than the difference variable, but also larger than or equal to 0.
  // Set the new difference value.
  // Set the winningIndex to mid.
  // 3. If it is more than the winning index, then we need to set the end to the mid - 1.
  while (start<=end) {
    // To perform the binary search, we need to find the middle index of the array, for every cycle of the loop.
    mid = Math.floor((start + end) / 2);

    if (array[mid] === num) {
      return `The winning bid is ${array[mid]}`;
    } else if (array[mid] < num) {
      if ((num - array[mid]) <= difference && (num - array[mid]) >= 0) {
        difference = (num - array[mid]);
        winningIndex = mid;
      } 
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (winningIndex === -1) {
    return -1
  } else {
    return (`The winning bid is ${array[winningIndex]}`);
  }
};

var prize = 9;
var bidsArray = [2, 7, 11, 15];
console.log(closestNumber(prize, bidsArray));

var prize = 11;
var bidsArray = [15, 2, 11, 7, 10];
console.log(closestNumber(prize, bidsArray));

var prize = 31;
var bidsArray = [32, 2, 7, 100, 11, 15, 59, 89];
console.log(closestNumber(prize, bidsArray)); 

var prize = 16;
var bidsArray = [32, 22, 17, 1, 71, 65, 59, 89];
console.log(closestNumber(prize, bidsArray));

var prize = 16;
var bidsArray = [32, 22, 17, 1, 5, 71, 65, 59, 89];
console.log(closestNumber(prize, bidsArray));

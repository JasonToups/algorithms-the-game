/* 
Game Instructions:

While on vacation in Los Angeles, you scored tickets to the Price is Right, and you find yourself on Contestant Row!

Drew Carey is about to ask you to bid on the prize.

Goal:
You must find the number in the array of numbers that is closest to the prize value, without going over.

If all of the bids are over the prize value, return the string: "All bids are over the prize value."
*/

/* 
Inputs:
- number - prize value
- array of numbers - bids on the prize

Output:
- number - closest number to the prize value
*/

/* Initial Setup
This would be a good function scaffold to use for your interviews, giving the candidates a place to start that's easy to understand and work with.

function closestNumber (num, array) {

};
var prize = 9;
var bidsArray = [2, 7, 11, 15];
console.log(closestNumber(prize, bidsArray));
*/

/* Brute Force Solution:
For an initial brute force solution, we can simply loop through the array and compare each number to the prize value.

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
    return "All bids are over the prize value."
  } else {
    return array[winningIndex];
  }
};

The runtime of this is linear approach is O(n).
But we can do better.
*/

/* Binary Search Solution:
For a binary search solution, we can use a binary search to find the closest number to the prize value. The binary search will check the value of the middle index, and depending on the value of the middle index, we can either set the start or end pointer to the middle index.

This will improve runtime by a factor of O(log n).
*/

function closestNumber (num, array) {
  // we need to sort the array to use binary search
  array = array.sort((a, b) => a - b);
  
  // we need a 3 pointer approach to track the start & end indexes, along with the middle of them, which will be set during each while loop.
  let start = 0;
  let end = array.length - 1;
  // Use Math.floor() to round down to the nearest whole number.
  let mid = Math.floor((start + end) / 2);

  // Three things need to happen here to handle the start & end pointers:
  // 1. We need to check if the mid index is the price of the prize.
  // If this is true, then return the mid index.
  // 2. If the mid value is less than the price, then we need to set the start to the mid.
  // 3. If the mid value is more than the price, then we need to set the end to the mid.

  // Once the pointers are working, then we need to handle returning the winning bid.
  // When the start and end pointers are equal, which is the end condition for the while loop, check if the mid value is less than the prize value.
  // If it is, then return the mid value.
  // If it is not, then return "All bids are over the prize value.".
  while (start<=end) {
    // To perform the binary search, we need to find the middle index of the array, for every cycle of the loop. 
    mid = Math.floor((start + end) / 2);

    if (array[mid] === num) {
      return `The winning bid is ${array[mid]}`;

    // If the start and end pointers are the same, we need to check if the mid value is less than the prize value.
    } else if (start === end ) {
      if (array[mid] < num) {
        return `The winning bid is ${array[mid]}`;
      } else {
        return "All bids are over the prize value.";
      }
    } else if (array[mid] < num) {
      if (array[mid + 1] > num) {
        return `The winning bid is ${array[mid]}`;
      }
      start = mid;
    } else {
      end = mid;
    }
  }
};

var prize = 9;
var bidsArray = [2, 7, 11, 15];
console.log(closestNumber(prize, bidsArray));

var prize = 6;
var bidsArray = [21, 7, 11, 15];
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

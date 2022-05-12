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


function closestNumber (num, array) {
  let index = 0;
  let winningIndex = -1;

  while (index < array.length) {
    index++;
  }

  return array[winningIndex];
};

var prize = 9;
var bidsArray = [2, 7, 11, 15];
console.log(closestNumber(prize, bidsArray));

var prize = 11;
var bidsArray = [15, 2, 11, 7];
console.log(closestNumber(prize, bidsArray));

var prize = 31;
var bidsArray = [32, 2, 7, 100, 11, 15, 59, 89];
console.log(closestNumber(prize, bidsArray));

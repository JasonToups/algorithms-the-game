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

Or, if you would like to give them more numbers to work with, it might help with visualizing the binary search technique:
var prize = 31;
var bidsArray = [32, 2, 7, 100, 11, 15, 59, 89];
console.log(closestNumber(prize, bidsArray)); 
*/

/* Brute Force Solution:
For an initial brute force solution, we can simply loop through the array and compare each number to the prize value, and then return the number that is closest to the prize value.

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
For a binary search solution, we will check the value of the middle index, and and if it is less than the prize value, we can set the start pointer to the middle index. If it is more than the prize value, we can set the end pointer to the middle index.

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
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

/* var prize = 9;
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
console.log(closestNumber(prize, bidsArray)); */

var prize = 16;
var bidsArray = [32, 22, 17, 1, 5, 71, 65, 59, 89];
console.log(closestNumber(prize, bidsArray));


// TODO remove the p5 Sketch function, and work on it in the p5 editor
// P5 Sketch
let arrayLength = bidsArray.length;

let canvasWidth = 550;
let canvasHeight = 200;
let canvasTop = 1855;
let backgroundColor = '#a4e2c6';

let indexSeparatorWidth = 10;
let indexSeparatorHeight = 50;
let indexWidth = (canvasWidth - indexSeparatorWidth)/ (arrayLength);
let indexSeparatorColor = '#03542fff';

function setupArray(array) {
  let index = 0;
  
  noStroke()
  fill(indexSeparatorColor);
  textAlign(CENTER, CENTER);
  
  while (index <= array.length) {
    if (index < array.length) {
      if (index === 0) {
        textSize(25);
        text('start',((index + 1) * indexWidth) - (indexWidth / 2) + (indexSeparatorWidth / 2), (canvasHeight / 3 - (indexSeparatorHeight / 2)) + 5);
      } else if (index === array.length - 1) {
        text('end',((index + 1) * indexWidth) - (indexWidth / 2) + (indexSeparatorWidth / 2), (canvasHeight / 3 - (indexSeparatorHeight / 2)) + 5);
      }
      textSize(27);
      text(`${array[index]}`,((index + 1) * indexWidth) - (indexWidth / 2) + (indexSeparatorWidth / 2), (canvasHeight/2 - (indexSeparatorHeight / 2)) + 5);
    }
    rect((indexWidth * index), canvasHeight/2 - indexSeparatorHeight + (indexSeparatorWidth/2), indexSeparatorWidth, indexSeparatorHeight, indexSeparatorWidth);
    
    index++  
  }
  rect(0, canvasHeight/2, canvasWidth, indexSeparatorWidth);
}

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  canvas.id('sketch--binary-search')
  background(backgroundColor);
}

function draw() {
  setupArray(bidsArray);
}
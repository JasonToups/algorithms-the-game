# The Price I$ Right: Binary Search in Javascript
Imagine you are in a technical interview, either as the interviewer or the applicant, and you are about to tackle the live-coding portion of the interview. 

This can be an awkward situation for both parties. Anything you can do to help communicate your goals & priorities during this process is greatly appreciated by your coding partner.
## Contestants Row

![come on down](./images/price-is-right-come-on-down.gif)

For our technical challenge today, we are going to pretend that we are in Contestants Row on The Price I$ Right, and we are bidding on a fabulous prize.

### Goals
![contestants row](./images/contestants-row.jpg)

You must find the **number** in the array of numbers that is *closest to the prize value*, without going over.

If all of the bids are *over the prize value*, return -1.

### Inputs:
- number - *prize value*
- array of numbers - *bids on the prize*

### Output:
- number - *closest number to the prize value*

## Arrays of Numbers in Interviews
**Binary searches** can be helpful when approaching a *sortable array of numbers*. They can *improve runtime* over a linear approach, since there should be fewer iterations before returning the result.

You may encounter an array of numbers during a techincal interview. This is a good time to *ask if you can sort the array of numbers*, since your approach will depend on if the array is sorted or not. 

- If you **can't sort the array**, then you can't perform a binary search. 
- If the array **can be sorted**, then you can jump right into the binary search approach, leaving more time to complete it. A brute-force linear approach may be more simple to complete, but chances are, you will be asked to improve the runtime of your function. So dive into the binary search.

![power move](./images/contestant-amazed-1-dollar.gif)

> Go for the power move, tackle the Binary Search

TODO - pickup editing the article from here to the end

Here are our inputs and the function invocation.
```javascript
var prize = 16;
var bidsArray = [32, 22, 17, 1, 5, 71, 65, 59, 89];
console.log(closestNumber(prize, bidsArray));
```

```javascript
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
```
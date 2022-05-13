# The Price I$ Right: Binary Search in Javascript
Imagine you are in a technical interview, either as the interviewer or the applicant, and you are about to tackle the live-coding portion of the interview. 

This can be an awkward situation for both parties. Anything you can do to help communicate your goals & priorities during this process is greatly appreciated by your coding partner.
## Contestants Row
For our technical challenge today, we are going to pretend that we are in Contestants Row on The Price I$ Right, and we are bidding on a fabulous prize.

### Goals
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
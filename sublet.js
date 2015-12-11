// We own an apartment and want to sublet it to guests such that we have the maximum number of days possible where someone is occupying
// You have an array. The position of the array is the day number. The value of the array is the amount of days (can be 0) that a guest is willing to stay.
// For each day, you may choose to have a quest stay any number of days represented in the set or reject the guest. If they stay, you may not have any other guests stay over the days they are there. 
// Find an algorithm that outputs the maximum number of total days all guests can stay.

// e.g. [1,2,4] returns 5
// e.g. [1,3,0,7,3] returns 8
// e.g. [1,2,3,5] returns 8

// In the first example, one guest comes in on Day 1 and wants to stay 1 day. One comes in on day 2 and wants to stay 2 days. One comes in on day 3 and wants to stay 4 days. 
// You can have the first guest stay one day, thus freeing up the space in day 2. You may have the second guest stay 2 days, but you cannot have the 3rd guest stay 3 days if the 2nd guest is staying because the room would still be occupied.
// Thus, the best algorithm would be to have the first guest stay one day, skip the second guest, and have the third guest stay 4 days for a total of 5. 

// [2, 3, 4] ret 6

// You may use any language you like (or psuedocode).

var sublet = function(input){
    var maxDays = 0;
    var daysAllowed = 0;
    var index = input.length;
    
    while (index--){
        if (input[index] > daysAllowed && input[index] > maxDays){
            maxDays = input[index];
            daysAllowed = 1;
        } else if (input[index] > daysAllowed && input[index] < maxDays){
            daysAllowed += 1;
        } else if (input[index] <= daysAllowed){
            maxDays += input[index];
            daysAllowed += 1;
        } 
    }
    
    return maxDays;
}

console.log("[1,2,4]: ", sublet([1,2,4]));
console.log("[1,3,0,7,6]: ", sublet([1,3,0,7,6])); // this case does not work
console.log("[1,2,3,5]: ", sublet([1,2,3,5]));
console.log("[2,3,4]: ", sublet([2,3,4]));
console.log("[1,1,1,1,1]: ", sublet([1,1,1,1,1]));
console.log("[1,2,0,1,1]: ", sublet([1,2,0,1,1]));
console.log("[7,0,0,1]: ", sublet([7,0,0,1]));
console.log("[7,6,5,4,3,2,1]: ", sublet([7,6,5,4,3,2,1]));

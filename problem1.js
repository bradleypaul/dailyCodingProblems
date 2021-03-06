/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. */


'use strict';

const challenge = function (nums, k) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == k) {
                return true;
            }
        }
    }
    return false;
}

const test = [10, 15, 3, 7];
const sum = 17;

console.log(challenge(test, sum));
/*This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.*/

//callback assumed to take no arguments
const challenge = function (callback, milliseconds) {
    setTimeout(callback, milliseconds);
}

//Test data
const milliseconds = 10000;
const callback = () => console.log(`Waited for ${milliseconds} milliseconds`);
challenge(callback, milliseconds);
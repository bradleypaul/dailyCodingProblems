/*Given an array of integers, return a new array such that each element
at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be
 [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6] */

const challenge = function (input) {
    return input.map((current, index, array) => {
        let copy = array.slice(0, index).concat(array.slice(index + 1));
        return copy.reduce((previous, current) => previous * current);
    });
}

let test = [1, 2, 3, 4, 5];
console.log(challenge(test));

test = [3, 2, 1];
console.log(challenge(test));
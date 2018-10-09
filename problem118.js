// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

const SQUARE = 2;

function squareSort(integers) {
    return integers.map(integer => {
        return Math.pow(integer, SQUARE);
    }).sort();
}

let integers = [-9, -2, 0, 2, 3];
console.log(squareSort(integers))
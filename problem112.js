// You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

// For example, in this matrix

// 0 3 1 1
// 2 0 0 4
// 1 5 3 1

// The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.

class Vertex {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function adjacentEdges(matrix, vertex) {
    let edges = [];
}

let matrix = [
    [0, 3, 1, 1],
    [2, 0, 0, 4],
    [1, 5, 3, 1]
];

console.log(matrix[0]);
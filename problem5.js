/* cons(a, b) constructs a pair
   car(pair) and cdr(pair) returns the first and last element of that pair.
   For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr. */

const cons = function (a, b) {
    const pair = f => {
        return f(a, b);
    }
    return pair;
}

const car = f => {
    return f(function (a, b) {
        return a;
    });
};

const cdr = f => {
    return f(function (a, b) {
        return b;
    });
};

console.log(car(cons(1, 2)));
console.log(cdr(cons(1, 2)));
// Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. If there are multiple smallest sets, return any of them.

// For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one set of numbers that covers all these intervals is {3, 6}.
//{4,6} also works

function compare(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

function intersection(x, y, intersect) {
    let result = y.map(item => x.includes(item) ? item : undefined)
        .filter(item => item);
    if (result.length == 0) {
        //result.push(y[0]);
    }
    return result;
}

function exists(x, interval) {
    console.log(x);
    console.log(interval)
    return (x >= interval[0]) && (x <= interval[interval.length - 1])
}

function findIntervals(intervals) {
    intervals = intervals.map(item => expand(...item)).sort();

    minSize = 1;
    let intersections = [];
    //while (intersections.length > minSize) {
    for (let i = 0; i < intervals.length - 1; i++) {
        temp = intersection(intervals[i], intervals[i + 1]);
        if (temp.length == 0) {
            minSize++;
        } else {
            intersections.push(temp);
        }
    }
    //}


    //while (intersections.length > minSize) {}

    console.log(intersections);


    // //let sets = new Array(intervals[0].length).fill([]);
    // let temp = intervals[0].slice(0);
    // intervals = intervals.slice(1);
    // console.log(intervals)
    // let sets = temp.map((item, index) => {
    //     return new Array(1).fill(item);
    // });

    // for(let i = 0; i < sets.length; i++) {
    //     let remaining = intervals.slice();
    //     while(remaining.length > 0) {
    //         remaining.filter(item => {
    //             return !exists()
    //         })
    //     }
    // }
    // intervals = intervals.slice(1)
    // sets.map(item => console.log(item))
}

function expand(x, y) {
    let a = new Array(y - x + 1).fill(undefined);
    a = a.map((item, index) => index + x);
    return a;
}

let intervals = [[0, 3], [2, 6], [3, 4], [6, 9], [5,7]]

findIntervals(intervals)
// This problem was asked by Google.

// Given a word W and a string S, find all starting indices in S which are anagrams of W.

// For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

let sort = word => Array.from(word).sort().join('');

function check (word, anagram) {
    console.log(word + ':' + anagram);
    return sort(word) == sort(anagram);
}

function anagrams (w, s) {
    let indices = [];
    let maxIndex = s.length - w.length;
    
    for(let i = 0; i <= maxIndex; i++) {
        if(check(w, s.slice(i, i + w.length))) {
            indices.push(i);
        }
    }
    return indices;
}

let w = 'ab';
let s = 'abxaba';
console.log(anagrams(w, s));
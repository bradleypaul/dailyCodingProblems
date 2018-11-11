// This problem was asked by Amazon.

// Given a string, determine whether any permutation of it is a palindrome.

// For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. 
// daily should return false, since there's no rearrangement that can form a palindrome.

function isPalindrome(str) {
    let letters = {};
    let isOdd = Boolean(str.length % 2);
    for(let i = 0; i < str.length; i++) {
        if(letters[str[i]] == undefined) {
            letters[str[i]] = 1;
        } else {
            let temp = letters[str[i]] - 1;
            if(temp > 0) {
                letters[str[i]] = temp;
            } else {
                delete letters[str[i]];
            }
        }
    }

    let result = Object.keys(letters);
    if(isOdd && result.length == 1) return true;
    if(!isOdd && result.length == 0) return true;
    return false;
}

console.log(isPalindrome('daily'));
console.log(isPalindrome('carrace'));
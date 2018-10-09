// This problem was asked by Google.

// Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

function reverseWords(words) {
    return words.split(' ').reverse().join(' ');
}


let words = "hello world here";
console.log(reverseWords(words));
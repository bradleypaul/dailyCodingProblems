// Given a string and a set of delimiters, reverse the words in the string while maintaining the relative order of the delimiters. 
// For example, given "hello/world:here", return "here/world:hello"

// Follow-up: Does your solution work for the following cases: "hello/world:here/", "hello//world:here"

function split (s, pattern) {
    return s.split(pattern).filter(item => item != '');
}

function join (w, d, delimiterFirst) {
    w = w.reverse();
    
    if(delimiterFirst) {
        let temp = d;
        d = w;
        w = temp;
    }

    let s = '';
    while(w.length > 0) {
        s += w.shift();
        if(d.length > 0) {
            s += d.shift();
        }
    }
    return s;
}

function reverseString (s) {
    let index = s.search(/\W/);
    let delimiterFirst = !Boolean(index);

    let words = split(s, /\W/);
    let delimiters = split(s, /\w/);
    return join(words, delimiters, delimiterFirst)
} 


let s = 'hello/world:here';
console.log(s + ' -> ' + reverseString(s));

s = 'hello//world:here';
console.log(s + ' -> ' + reverseString(s));

s = 'hello/world:here/';
console.log(s + ' -> ' + reverseString(s));
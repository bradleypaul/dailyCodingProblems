// This problem was asked by Google.

// You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string.
// Determine whether the parentheses are balanced.

// For example, (()* and (*) are balanced. )*( is not balanced.
const openParens = '(';
const closeParens = ')';
const asterisk = '*';

function balancedParens(parens) {
    let openParensCount = 0;
    let asteriskCount = 0;

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === openParens) {
            openParensCount += 1;
        } else if (parens[i] === closeParens) {
            if (openParensCount > 0) {
                openParensCount -= 1;
            } else {
                return false;
            }
        } else if(parens[i] === asterisk) {
            asteriskCount += 1;
        }
    }

    return openParensCount === 0 || asteriskCount - openParensCount >= 0;
}

console.log(balancedParens('(()*'));
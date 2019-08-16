// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SECTION solution using various helper methods

// function palindrome(str) {
//     if (typeof str !== "string") {
//         let string = toString(str);
//         let reversed = string
//             .split("")
//             .reverse()
//             .join("");
//         return str === reversed;
//     }
//     let reversed = str
//         .split("")
//         .reverse()
//         .join("");
//     return str === reversed;
// }
// module.exports = palindrome;

// SECTION regular without helper methods

function palindrome(str) {
    let output = "";
    if (typeof str !== "string") {
        let string = toString(str);
        let strLength = string.length;
        // NOTE Classic for loop
        for (let i = strLength - 1; i >= 0; i--) {
            output += string[i];
        }
        // NOTE For of loop
        // for (let character of string) {
        //     output = character + output;
        // }
        // NOTE For in loop
        // for (let index in string) {
        //     output = str[index] + output;
        // }
        return str === output;
    }
    let strLength = str.length;
    // NOTE Classic for loop
    // for (let i = strLength - 1; i >= 0; i--) {
    //     output += str[i];
    // }
    // NOTE For of loop
    // for (let character of str) {
    //     output = character + output;
    // }
    // NOTE For in loop
    for (let index in str) {
        output = str[index] + output;
    }
    return str === output;
}
module.exports = palindrome;

// SECTION string reversal method

// function palindrome(str) {
//     if (typeof str !== "string") {
//         let string = toString(str);
//         let reversed = string.split("").reduce((rev, char) => char + rev);
//         return reversed === string;
//     }
//     let reversed = str.split("").reduce((rev, char) => char + rev);
//     return reversed === str;
// }

// module.exports = palindrome;

//SECTION solution using every Array helper ** not ideal because we do a double comparisson **
// function palindrome(str) {
//     if (typeof str !== "string") {
//         let string = toString(str);
//         return string.split("").every((char, index) => char === string[string.length - index - 1]);
//     }
//     return str.split("").every((char, index) => char === str[str.length - index - 1]);
// }

// module.exports = palindrome;

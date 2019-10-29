// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SECTION solution with methods

// function reverse(str) {
//     let output = str
//         .split("")
//         .reverse()
//         .join("");
//     return output;
// }

// SECTION solution without methods with for loop ****Faster****

// function reverse(str) {
//     if (typeof str !== "string") {
//         return "provide a string";
//     }
//     let output = "";
//     // NOTE classic for loop ***Fastest But more Prone to error***
//     for (let index = str.length - 1; index >= 0; index--) {
//         output += str[index];
//     }
//     // NOTE For of loop *** Takes almost the same time than the classic for ****
//     // for (let character of str) {
//     //     output = character + output;
//     // }

//     // NOTE For in loop *** Takes almost the same time than the classic for ****
//     // for (let index in str) {
//     //     output = str[index] + output;
//     // }
//     return output;
// }
function reverse(str) {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}
module.exports = reverse;

// SECTION solution without methods memoized ****Slightly Faster****

// function reverse(str) {
//     if (typeof str !== "string") {
//         return "provide a string";
//     }
//     let output = "";
//     // NOTE classic for loop ***Fastest But more Prone to error***
//     for (let index = str.length - 1; index >= 0; index--) {
//         output += str[index];
//     }
//     // NOTE For of loop *** Takes almost the same time than the classic for ****
//     // for (let character of str) {
//     //     output = character + output;
//     // }

//     // NOTE For in loop *** Takes almost the same time than the classic for ****
//     // for (let index in str) {
//     //     output = str[index] + output;
//     // }
//     return output;
// }

// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         if (cache[args]) {
//             return cache[args];
//         }
//         let newCall = fn.apply(null, args);
//         cache[args] = newCall;
//         return newCall;
//     };
// }
// let memoReverse = memoize(reverse);

// module.exports = memoReverse;

// SECTION String Reversal *** The most Dificult Solution***

// function reverse(str) {
//     return str.split("").reduce((rev, char) => char + rev, "");
// }

// module.exports = reverse;

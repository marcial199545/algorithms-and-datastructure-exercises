// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let reversed = n
//         .toString()
//         .split("")
//         .reverse()
//         .join("");
//     let reversedNumber = parseInt(reversed);
//     return reversedNumber * Math.sign(n);
// }
function reverseInt(n) {
    let stringInt = n.toString();
    let i = stringInt.length - 1;
    let output = "";
    while (stringInt[i] !== "-" && stringInt[i] !== undefined) {
        output += stringInt[i];
        i--;
    }
    return parseInt(output) * Math.sign(n);
}

// SECTION memoized reversed int ** improved version **
// function reverseInt(n) {
//     let reversed = n
//         .toString()
//         .split("")
//         .reverse()
//         .join("");
//     return parseInt(reversed) * Math.sign(n);
// }
// console.log(reverseInt(-52));

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
// let memoReverseInt = memoize(reverseInt);

module.exports = reverseInt;

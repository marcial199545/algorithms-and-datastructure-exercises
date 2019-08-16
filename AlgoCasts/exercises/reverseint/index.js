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
//     if (Math.sign(n) === -1) {
//         let reversed = n
//             .toString()
//             .split("")
//             .reverse()
//             .join("");

//         return parseInt("-" + reversed);
//     } else {
//         let reversed = n
//             .toString()
//             .split("")
//             .reverse()
//             .join("");
//         return parseInt(reversed);
//     }
// }

// SECTION memoized reversed int ** improved version **
function reverseInt(n) {
    let reversed = n
        .toString()
        .split("")
        .reverse()
        .join("");
    return parseInt(reversed) * Math.sign(n);
}

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        let newCall = fn.apply(null, args);
        cache[args] = newCall;
        return newCall;
    };
}
let memoReverseInt = memoize(reverseInt);

module.exports = memoReverseInt;

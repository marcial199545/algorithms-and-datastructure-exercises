// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// SECTION  unmemoized version  ***Normal fibonacci***

// function fib(n) {
//     if (n <= 2) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// function fib(n) {
//     if (n < 3) return 1;
//     let output = [0, 1];
//     let a = 0;
//     let b = 1;
//     let c = 0;
//     for (let i = 2; i <= n; i++) {
//         c = a + b;
//         output[i] = c;
//         a = b;
//         b = c;
//     }
//     return output[n ];
// }
// SECTION  memoized version  ***Improved***
// NOTE first create the HOF to memoize a function

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
let memoizedFib = memoize(fib);

function fib(n, cache = {}) {
    if (n < 3) {
        return 1;
    }
    return memoizedFib(n - 1) + memoizedFib(n - 2);
}
module.exports = fib;

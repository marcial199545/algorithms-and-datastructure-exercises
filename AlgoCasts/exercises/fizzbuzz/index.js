// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// SECTION variation 1
// function fizzBuzz(n) {
//     let i = 1;
//     let val = 1;
//     // NOTE Using while loop
//     while (i <= n) {
//         i % 3 === 0 && i % 5 === 0
//             ? (val = "fizzbuzz")
//             : i % 3 === 0
//             ? (val = "fizz")
//             : i % 5 === 0
//             ? (val = "buzz")
//             : (val = i);
//         console.log(val);
//         i++;
//     }
// }

// SECTION variation 2
function fizzBuzz(n) {
    // NOTE using for loop
    let val = 1;
    for (let i = 1; i <= n; i++) {
        i % 3 === 0 && i % 5 === 0
            ? (val = "fizzbuzz")
            : i % 3 === 0
            ? (val = "fizz")
            : i % 5 === 0
            ? (val = "buzz")
            : (val = i);
        console.log(val);
    }
}

// SECTION variation 3
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

module.exports = fizzBuzz;

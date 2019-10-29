// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// SECTION Solution 1

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let r = 0; r < n; r++) {
//         let level = "";
//         for (let c = 0; c < n * 2 - 1; c++) {
//             midpoint - r <= c && midpoint + r >= c ? (level += "#") : (level += " ");
//         }
//         console.log(level);
//     }
// }

// SECTION Solution 2 *** recursion ***

// function pyramid(n, row = 0, level = "") {
//     if (row === n) {
//         return;
//     }
//     if (level.length === n * 2 - 1) {
//         console.log(level);
//         pyramid(n, row + 1);
//         return;
//     }
//     let midpoint = n - 1;
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = "#";
//     } else {
//         add = " ";
//     }
//     pyramid(n, row, level + add);
// }
function pyramid(n, row = 0, level = "") {
    if (row === n) return;
    if (level.length === n * 2 - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    let middle = n - 1;
    let add = middle - row <= level.length && middle + row >= level.length ? "#" : " ";
    pyramid(n, row, level + add);
}
pyramid(3);
// module.exports = pyramid;

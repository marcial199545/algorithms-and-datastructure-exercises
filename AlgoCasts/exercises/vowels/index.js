// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?').length --> ||04

// SECTION Solution 1
// function vowels(str) {
//     let regExp = /[aeiou]/gi;
//     let vowels = str.match(regExp);
//     return vowels ? vowels.length : 0;
// }

// SECTION Solution 2
// function vowels(str) {
//     let count = 0;
//     let checker = ["a", "e", "i", "o", "u"];
//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
function vowels(str) {
    let vowelsMap = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1
    };
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsMap[str[i].toLowerCase()]) {
            count++;
        }
    }
    return count;
}
module.exports = vowels;

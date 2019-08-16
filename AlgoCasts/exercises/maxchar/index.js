// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ANCHOR to resolve this problem we basically have to transform the string into an object were the keys are the characters of the string and the values are the number of times they repeat
// SECTION Variation 1
// function maxChar(str) {
//     let obj = {};
//     let max = 0;
//     let maxChar = "";
//     let splitted = str.split("");
//     for (let character of splitted) {
//         if (!obj[character]) {
//             obj[character] = 1;
//         } else {
//             obj[character] += 1;
//         }
//     }
//     for (let char in obj) {
//         let temp = obj[char];
//         if (temp > max) {
//             max = temp;
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// SECTION Variation 2
// function maxChar(str) {
//     let charactersObj = {};
//     let max = 0;
//     let maxChar = "";
//     for (let character of str) {
//         !charactersObj[character] ? (charactersObj[character] = 1) : charactersObj[character]++;
//     }
//     for (let char in charactersObj) {
//         let temp = charactersObj[char];
//         if (temp > max) {
//             max = temp;
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// SECTION Variation 3
function maxChar(str) {
    let charactersObj = {};
    let max = 0;
    let maxChar = "";
    for (let character of str) {
        charactersObj[character] = charactersObj[character] + 1 || 1;
    }
    for (let char in charactersObj) {
        if (charactersObj[char] > max) {
            max = charactersObj[char];
            maxChar = char;
        }
    }
    return maxChar;
}
module.exports = maxChar;

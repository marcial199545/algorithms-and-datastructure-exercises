// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SECTION Solution 1
// function capitalize(str) {
//     return str.replace(/\b\w/g, x => x.toUpperCase());
// }

// SECTION Solution 2 ** Not optimal
// function capitalize(str) {
//     let words = str.split(" ");
//     words = words.map(word => {
//         return word[0].toUpperCase() + word.slice(1);
//     });
//     return words.join(" ");
// }
function capitalize(str) {
    let arrStr = str.split(" ");
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].replace(arrStr[i][0], arrStr[i][0].toUpperCase());
        arrStr[i] += " ";
    }
    return arrStr.join("");
}
console.log(capitalize("hey nice to meet you"));
// SECTION solution 3
// function capitalize(str) {
//     let result = "";
//     for (let index in str) {
//         if (!str[index - 1] || str[index - 1] === " ") {
//             result += str[index].toUpperCase();
//         } else {
//             result += str[index];
//         }
//     }
//     return result;
// }
module.exports = capitalize;

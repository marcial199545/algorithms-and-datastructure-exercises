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
function capitalize(str) {
    let words = str.split(" ");
    words = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });
    return words.join(" ");
}
module.exports = capitalize;

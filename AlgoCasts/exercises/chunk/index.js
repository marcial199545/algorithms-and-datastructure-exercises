// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SECTION solution 1 ** recursive **
// function chunk(array, size) {
//     if (size >= array.length) return [array];
//     else return [array.slice(0, size)].concat(chunk(array.slice(size), size));
// }

// SECTION solution 2
// function chunk(array, size) {
//     let chunked = [];
//     for (let element of array) {
//         const lastElement = chunked[chunked.length - 1];
//         if (!lastElement || lastElement.length === size) {
//             chunked.push([element]);
//         } else {
//             lastElement.push(element);
//         }
//     }
//     return chunked;
// }

// SECTION solution 3
function chunk(array, size) {
    let chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = chunk;

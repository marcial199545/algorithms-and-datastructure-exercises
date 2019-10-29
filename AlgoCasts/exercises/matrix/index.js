// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     let output = [];
//     for (let i = 0; i < n; i++) {
//         output.push([]);
//     }
//     let count =1;
//     let startRow = 0;
//     let endRow = n-1
//     let startColumn
//     console.log(output);
// }

// function matrix(n) {
//     const results = [];
//     for (let i = 0; i < n; i++) {
//         results.push([]);
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while (startColumn <= endColumn && startRow <= endRow) {
//         // NOTE Top row
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;

//         // NOTE Right column
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;

//         // NOTE Bottom row
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;

//         // NOTE start column
//         for (let i = endRow; i >= startRow; i--) {
//             results[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }
//     return results;
// }

// function readMatrix(matrix) {
//     let output = [];
//     let startColumn = 0;
//     let endColumn = matrix[0].length - 1;
//     let startRow = 0;
//     let endRow = matrix.length - 1;
//     let dimension = matrix[0].length * matrix.length;
//     let count = 0;
//     while (startColumn <= endColumn && startRow <= endRow) {
//         for (let i = startColumn; i <= endColumn; i++) {
//             if (count < dimension) {
//                 output.push(matrix[startRow][i]);
//             }
//             count++;
//         }
//         startRow++;
//         for (let i = startRow; i <= endRow; i++) {
//             if (count < dimension) {
//                 output.push(matrix[i][endColumn]);
//             }
//             count++;
//         }
//         endColumn--;
//         for (let i = endColumn; i >= startColumn; i--) {
//             if (count < dimension) {
//                 output.push(matrix[endRow][i]);
//             }
//             count++;
//         }
//         endRow--;
//         for (let i = endRow; i >= startRow; i--) {
//             if (count < dimension) {
//                 output.push(matrix[i][startColumn]);
//             }
//             count++;
//         }
//         startColumn++;
//     }
//     return output;
// }
// console.log(readMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
function matrix(n) {
    const output = [];
    for (let i = 0; i < n; i++) {
        output.push([]);
    }
    let sR = 0;
    let sC = 0;
    let eR = n - 1;
    let eC = n - 1;
    let count = 1;

    while (sR <= eR && sC <= eC) {
        for (let i = sC; i <= eC; i++) {
            output[sR][i] = count;
            count++;
        }
        sR++;
        for (let i = sR; i <= eR; i++) {
            output[i][eC] = count;
            count++;
        }
        eC--;
        for (let i = eC; i >= sC; i--) {
            output[eR][i] = count;
            count++;
        }
        eR--;
        for (let i = eR; i >= sR; i--) {
            output[i][sC] = count;
            count++;
        }
        sC++;
    }
    return output;
}

module.exports = matrix;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SECTION Solution1
// function anagrams(stringA, stringB) {
//     let charObjOne = {};
//     let charObjtwo = {};
//     let strA = stringA.toLowerCase().replace(/\W/g, "");
//     let strB = stringB.toLowerCase().replace(/\W/g, "");
//     if (strA.length !== strB.length) {
//         return false;
//     }
//     for (let char of strA) {
//         charObjOne[char] = charObjOne[char] + 1 || 1;
//     }
//     for (let char of strB) {
//         charObjtwo[char] = charObjtwo[char] + 1 || 1;
//     }
//     for (let char in charObjOne) {
//         if (charObjOne[char] !== charObjtwo[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// SECTION solution 2
// function anagrams(stringA, stringB) {
//     let strA = stringA.toLowerCase().replace(/\W/g, "");
//     let strB = stringB.toLowerCase().replace(/\W/g, "");

//     let finalStringA = strA
//         .split("")
//         .sort()
//         .join("");
//     let finalStringB = strB
//         .split("")
//         .sort()
//         .join("");

//     return finalStringA === finalStringB;
// }

// SECTION solution 3
// function buildCharMap(str) {
//     let obj = {};
//     for (let char of str) {
//         obj[char] = obj[char] + 1 || 1;
//     }
//     return obj;
// }
// function cleanedString(str) {
//     let output = str.toLowerCase().replace(/\W/g, "");
//     return output;
// }
// function anagrams(stringA, stringB) {
//     let cleanedStrA = cleanedString(stringA);
//     let cleanedStrB = cleanedString(stringB);
//     let charMapA = buildCharMap(cleanedStrA);
//     let charMapB = buildCharMap(cleanedStrB);
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }
//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// SECTION solution 3 ** Slower **
// function cleanString(str) {
//     return str
//         .replace(/\W/g, "")
//         .split("")
//         .sort()
//         .join("");
// }
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }
function anagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let result = true;
    let mapStr1 = {};
    let mapStr2 = {};
    str1 = str1.trim();
    str2 = str2.trim();
    for (let i = 0; i < str1.length; i++) {
        mapStr1[str1[i]] = mapStr1[str1[i]] ? ++mapStr1[str1[i]] : 1;
        mapStr2[str2[i]] = mapStr2[str2[i]] ? ++mapStr2[str2[i]] : 1;
    }
    for (let char in mapStr1) {
        if (mapStr1[char] !== mapStr2[char]) {
            result = false;
            break;
        }
    }

    return result;
}
module.exports = anagrams;

// You are given a table, in which every key is a stringified number, and each corresponding value is an array of
// characters, e.g.
// {
//     "1": ["A", "B", "C"],
//     "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the
// value-arrays, e.g.
// {
//     "1": ["C"],
//     "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that
// character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1. If
// duplicate characters are found in the same array, the first occurrence should be kept.

function duplicatesEverywhere(obj) {
    const sortedKeys = Object.keys(obj).sort((a, b) => Number(a) - Number(b));
    const encountered = {};

    for (const key of sortedKeys) {
        obj[key] = obj[key].filter((char, index, arr) => {
            if (arr.indexOf(char) !== index) return false;

            if (encountered[char] && Number(key) < encountered[char]) return false;

            encountered[char] = Number(key);
            return true;
        });
    }

    for (const key of sortedKeys) {
        obj[key] = obj[key].filter((char) => {
            return encountered[char] === Number(key);
        });
    }

    return obj;
}

module.exports = {duplicatesEverywhere};
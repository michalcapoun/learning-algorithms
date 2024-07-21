// task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces.

function stringArrayDuplicates(strArray) {
    let result = [];

    for (let word of strArray) {
        let currentChar = '';
        let newWord = '';

        for (let char of word) {
            if (currentChar !== char) {
                currentChar = char;
                newWord += char;
            }
        }
        result.push(newWord);
    }

    return result;
}

module.exports = {stringArrayDuplicates};
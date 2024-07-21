// For a given string s find the character c (or C) with longest consecutive repetition and return:
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
// For empty string return:
// ["", 0]

function longestRepetition(str) {
    if (str === "") return ['', 0]

    let maxChar = ''
    let maxLength = 0
    let currentChar = ''
    let currentLength = 0

    for (let index = 0; index < str.length; index++) {
        currentLength = (str[index] === currentChar) ? currentLength + 1 : 1
        currentChar = (str[index] === currentChar) ? currentChar : str[index]

        if (currentLength > maxLength) {
            maxLength = currentLength
            maxChar = currentChar
        }
    }

    return [maxChar, maxLength]
}

module.exports = {longestRepetition}
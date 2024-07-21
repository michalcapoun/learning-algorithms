// There is an array with some numbers. All numbers are equal except for one.
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniqueNumber(arr) {
    let numFrequency = {};

    for (let num of arr) {
        if (numFrequency[num] === undefined) {
            numFrequency[num] = 1;
        } else {
            numFrequency[num]++;
        }
    }

    for (let key in numFrequency) {
        if (numFrequency[key] === 1) {
            return parseFloat(key);
        }
    }
}

module.exports = {findUniqueNumber};
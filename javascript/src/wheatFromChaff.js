// Given a sequence of n integers , separate the negative numbers (chaff) from positive ones (wheat).
//
// Sequence size is at least 3
//
// Return a new sequence, such that negative numbers (chaff) come first, then positive ones (wheat).
//
// Repetition of numbers in the input sequence could occur, so duplications are included when separating. If a misplaced
// positive number is found in the front part of the sequence, replace it with the last misplaced negative number
// (the one found near the end of the input). The second misplaced positive number should be swapped with the second last
// misplaced negative number. Negative numbers found at the head (beginning) of the sequence, should be kept in place.

function wheatFromChaff(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = arr.slice();

    while(left < right) {
        while (left < right && result[left] < 0) {
            left++;
        }

        while (left < right && result[right] > 0) {
            right--;
        }

        if (left < right) {
            let temp = result[left];
            result[left] = result[right];
            result[right] = temp;
        }
    }

    return result;
}

module.exports = {wheatFromChaff};
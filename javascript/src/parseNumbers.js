// create function called parseNumbers that takes string as input and converts it into array of numbers. input string may consist of:
// coma separated list of numbers, string "1,7" should be converted into array [1,7]
// numeric range, "3-5" should be converted into array [3,4,5]
// combination of two, "1,3-5,7" should be converted into array [1,3,4,5,7]
// al numbers are positive integers. you can assume that input is valid.

function parseNumbers(str) {
    let results = [];

    if (typeof str !== "string") {
        return 'Invalid argument type: ' + typeof str;
    }

    let parts = str.split(',');

    for (let part of parts) {
        if (part.includes('-')) {
            let [start, end] = part.split('-').map(Number);
            for (let index = start; index <= end; index++) {
                results.push(index);
            }
        } else {
            results.push(Number(part));
        }
    }

    return results;
}

module.exports = {parseNumbers};
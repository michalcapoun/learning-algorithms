// given int array, return only unique values

function onlyUnique(array) {
    let unique = [];

    for (let num of array) {
        if (unique.includes(num)) continue;
            unique.push(num);
    }

    return unique;
}

module.exports = {onlyUnique};
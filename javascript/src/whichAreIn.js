// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

function whichAreIn (a1, a2) {
    const r = [];

    for (const str1 of a1) {
        if (a2.some(str2 => str2.includes(str1))) {
            r.push(str1);
        }
    }

    return r.sort();
}

module.exports = {whichAreIn};
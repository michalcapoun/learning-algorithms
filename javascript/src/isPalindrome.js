/*
Create a function called palindrome that takes a string as an input and returns a boolean value whether a string is a palindrome or not. Rules are as follows:
the comparison is case-insensitive: "a" DOES EQUAL "A"
the space is not considered a character (it is ignored)
string has to be at least one character long, otherwise the result is by DEFAULT "false"

Palindrom is a word or a phrase that reads the same from the beginning and from the end ("ABBA" is palindrome, "Anna" is also palindrome)

Example cases:
palindrome("My Gym");

Should return "true"

palindrome("never odd or even");

Should return "true"

palindrome("radars");

Should return "false"

*/

function isPalindrome(str) {
    let modifiedStr = str.replace(" ","").toLowerCase();
    let reversedStr = modifiedStr.split("").reverse().join("");

    return modifiedStr === reversedStr;
}

module.exports = {isPalindrome};
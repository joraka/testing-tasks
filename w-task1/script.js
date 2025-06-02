function isEven(num) {
    return num % 2 === 0;
}
 
function isEmptyString(str) {
    return str === '';
}
 
function checkNumber(num) {
    if (num > 0) return 'positive';
    if (num < 0) return 'negative';
    return 'zero';
}
 
function startsWithCapital(word) {
    if (!word) return false;
    return word[0] === word[0].toUpperCase();
}
 
function maxOfTwo(a, b) {
    return a >= b ? a : b;
}
 
function getFirstElement(array) {
    return array[0];
}
 
function arrayLength(array) {
    return array.length;
}
 
function hasElements(array) {
    return array.length > 0;
}
 
function toLowerCase(str) {
    return str.toLowerCase();
}
 
function joinStrings(a, b) {
    return a + b;
}
 
function areEqualIgnoreCase(a, b) {
    return a.toLowerCase() === b.toLowerCase();
}
 
function containsNumber(array, num) {
    return array.includes(num);
}
 
function countOccurrences(array, value) {
    return array.filter(el => el === value).length;
}
 
function filterGreaterThanTen(array) {
    return array.filter(num => num > 10);
}
 
function filterLongWords(words) {
    return words.filter(word => word.length > 3);
}
 
function joinArray(array) {
    return array.join(',');
}
 
function reverseArray(array) {
    return array.slice().reverse();
}
 
function isInteger(num) {
    return Number.isInteger(num);
}
 
function endsWithWord(str, word) {
    return str.endsWith(word);
}
 
function squareRoot(num) {
    return Math.sqrt(num);
}
 
// Eksportuojam visas funkcijas
export {
    isEven,
    isEmptyString,
    checkNumber,
    startsWithCapital,
    maxOfTwo,
    getFirstElement,
    arrayLength,
    hasElements,
    toLowerCase,
    joinStrings,
    areEqualIgnoreCase,
    containsNumber,
    countOccurrences,
    filterGreaterThanTen,
    filterLongWords,
    joinArray,
    reverseArray,
    isInteger,
    endsWithWord,
    squareRoot
};
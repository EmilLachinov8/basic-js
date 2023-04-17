const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * param {String} s1
 * param {String} s2
 * return {Number}
 *
 * example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;

  const s1Map = new Map();
  for (const char of s1) {
    const charCount = s1Map.get(char) || 0;
    s1Map.set(char, charCount + 1);
  }

  for (const char of s2) {
    const charCount = s1Map.get(char) || 0;
    if (charCount > 0) {
      sum++;
      s1Map.set(char, charCount - 1);
    }
  }
  
  return sum;
}

module.exports = {
  getCommonCharacterCount
};

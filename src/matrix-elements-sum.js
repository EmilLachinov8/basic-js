const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * param {Array<Array>} matrix
 * return {Number}
 *
 * example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const columns = matrix[0].length;
  const rows = matrix.length;
  const set = new Set();
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (set.has(col)) {
        continue;
      }
      let value = matrix[row][col];
      if (value === 0) {
        set.add(col);
      } else {
        result += value;
      }
    }
  }
  return result;
}


module.exports = {
  getMatrixElementsSum
};

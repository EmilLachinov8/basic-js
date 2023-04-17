const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * param {Array} arr initial array
 * returns {Array} transformed array
 * 
 * example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const transformed = [];
  let discardNext = false;
  let doubleNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }

    switch (arr[i]) {
      case '--discard-next':
        discardNext = true;
        break;
      case '--discard-prev':
        if (transformed.length > 0 && arr[i - 2] !== '--discard-next') {
          transformed.pop();
        }
        break;
      case '--double-next':
        doubleNext = true;
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          transformed.push(arr[i - 1]);
        }
        break;
      default:
        if (doubleNext) {
          transformed.push(arr[i], arr[i]);
          doubleNext = false;
        } else {
          transformed.push(arr[i]);
        }
        break;
    }
  }

  return transformed;
}

module.exports = {
  transform
};

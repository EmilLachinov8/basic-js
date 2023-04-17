const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * param {Array} names
 * return {Array}
 *
 * example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const map = new Map();
  const arr = [];
  
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let newName = name;
    
    if (map.has(name)) {
      let count = map.get(name) + 1;
      newName = `${name}(${count})`;
      map.set(name, count);
    } else if (arr.includes(name)) {
      let count = 1;
      newName = `${name}(${count})`;
      map.set(name, count);
    }
    
    map.set(newName, 0);
    arr.push(newName);
  }
  
  return arr;
}

module.exports = {
  renameFiles
};

const { halfAnArray, findIndex } = require('../array');

module.exports = function binarySearch(array, index) {
  // 1: Half an Array
  const { leftSide, rightSide } = halfAnArray(array);
  // 2: Compare The Wanted Index Against The Right Side of an Array
  const indexedLabel = findIndex(rightSide[0].id, index);

  // 3: Decide To Return an Index or To Perform Recursive Loops
  // indexedLabel = -2 (The Wanted Index is Lower Than The First Index of The Right Side Array)
  if (indexedLabel === -2) return binarySearch(leftSide, index);
  // indexedLabel = -1 (The Wanted Index is Larger Than The First Index of The Right Side Array)
  else if (indexedLabel === -1) return binarySearch(rightSide, index);
  // indexedLabel = 0 (The Wanted Index is Equal The First Index of The Right Side Array)
  else return indexedLabel;
}

module.exports = function halfAnArray(array) {
  const halfLength = Math.floor(array.length / 2);

  const leftSide = array.splice(0, halfLength);
  const rightSide = array.splice(halfLength, array.length);

  return { leftSide, rightSide };
}

module.exports = function findIndex(b, i) {
  if (i < b) return -1;
  else if (i > b) return 1;
  else return 0;
}

module.exports = function sortArray(a) {
  a.sort((a, b) => {
    return a.id - b.id;
  });
}

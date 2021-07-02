module.exports.halfAnArray = (array) => {
  const halfLength = Math.floor(array.length / 2);
  const leftSide = array.slice(0, halfLength);
  const rightSide = array.slice(halfLength, array.length);
  return { leftSide, rightSide };
}

module.exports.findIndex = (b, i) => {
  if (i < b) return -2;
  else if (i > b) return -1;
  else return 0;
}

module.exports.sortArray = (a) => {
  return a.sort((a, b) => {
    return Number(a.id) - Number(b.id);
  });
}

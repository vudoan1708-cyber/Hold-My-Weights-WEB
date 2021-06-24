module.exports.halfAnArray = (array) => {
  const halfLength = Math.floor(array.length / 2);
  // console.log(halfLength);
  // console.log(array.slice(0, halfLength));
  const leftSide = array.slice(0, halfLength);
  const rightSide = array.slice(halfLength, array.length);
  return { leftSide, rightSide };
}

module.exports.findIndex = (b, i) => {
  if (i < b) return -2;
  else if (i > b) return -1;
  else return b;
}

module.exports.sortArray = (a) => {
  let newArray = []
  newArray = a.sort((a, b) => {
    return a.id - b.id;
  });

  return newArray;
}

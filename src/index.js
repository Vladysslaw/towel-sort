
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let arrNew = [];
  matrix.forEach((arr, index) => {
    if (index % 2 != 0) {
      arr = arr.reverse();
      arr.forEach(item => {
        arrNew.push(item);
      });
    } else {
      arr.forEach(item => {
        arrNew.push(item);
      })
    }
  });
  return arrNew;
}

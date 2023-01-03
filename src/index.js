module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix == []) return [];
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
    const arr = (i + 1) % 2 == 0 ? matrix[i].reverse() : matrix[i];
    for(let l = 0; l < matrix[i].length; l++) {
      result.push(matrix[i][l]);
    }
  }
  return result;
}

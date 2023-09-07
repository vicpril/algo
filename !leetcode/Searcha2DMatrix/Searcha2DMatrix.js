/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

 // O(n+m)
// var searchMatrix = function(matrix, target) {
//     let c = matrix[0].length - 1
//     let r = 0

//     while(c >= 0 && r < matrix.length) {
//         if(matrix[r][c] === target) return true
//         else if (matrix[r][c] > target) c--
//         else r++
//     }

//     return false
// };

 // O(log(n+m))
 var searchMatrix = function(m, target) {
  if (m[0][0] > target || m[m.length-1][m[m.length-1].length - 1] < target) return false

  // search row
  let l = 0, r = m.length - 1
  let tRow = Math.floor((l + r) / 2)

  while(l < r) {
      if (m[tRow][0] <= target) {
          l = tRow + 1
      } 
      if (m[tRow][m[tRow].length - 1] >= target) {
          r = tRow
      }
      tRow = Math.floor((l + r) / 2)
    }

  //search column

  if (m[tRow][0] > target || m[tRow][m[tRow].length - 1] < target) return false
  l = 0, r = m[tRow].length - 1
  tCol = Math.floor((l + r) / 2)
  console.log("🚀 ~ tCol:", tCol)

  while(l <= r) {
      if (m[tRow][tCol] === target) return true 
      if (m[tRow][tCol] > target) {
          r = tCol - 1
      } 
      else {
          l = tCol + 1
      }
      tCol = Math.floor((l + r) / 2)
  }

  return false

};
 // O(log(n*m))
var searchMatrix = function(m, target) {
  const rows = m.length, cols = m[0].length
  let l = 0, r = rows * cols -1

  while (l <= r) {
    const mid = Math.floor((l+r)/2)
    const midV = m[ Math.floor(mid / cols) ][ mid % cols ]

    if (midV === target) return true 
    else if (midV < target) l = mid + 1
    else r = mid - 1
  } 
  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 11))
// console.log(searchMatrix([[1, 3, 5]], 1))
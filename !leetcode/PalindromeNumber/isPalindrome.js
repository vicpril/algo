/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // return x.toString() === x.toString().split('').reverse().join('')
  x = x.toString()
  let l = 0, r = x.length - 1

  while (l < r) {
      if (x[l] !== x[r])
          return false
      l++
      r--
  }

  return true
};
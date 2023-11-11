/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let dir = 1 // direction 1 - down, (-1) - up

  const map = Array.from({length: numRows}, e => ([])) // [][]

  let n = 0

  for(let i = 0; i < s.length; i++) {
      map[n].push(s[i])

      if(dir > 0) {
          if (n === numRows - 1) {
              dir = -1
              n--
          } else {
              n++
          }
      } else {
          if (n === 0) {
              dir = 1
              n++
          } else {
              n--
          }
      }
  }

  console.log("🚀 ~ map:", map)
  return map.reduce((res, curr) => res + curr.join(''), '')
};

console.log(convert("PAYPALISHIRING", 3))
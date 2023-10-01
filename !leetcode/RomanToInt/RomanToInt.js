/**
 * @param {string} s
 * @return {number}
 */
const d = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}


var romanToInt = function(s) {
  let result = 0

  for(let i = 0; i < s.length; i++) {
      const curr = d[s[i]]
      const next = d[s[i + 1]]
      console.log("🚀 ~ curr - next:", curr, next)

      if (curr < next) {
          result += next - curr
          i++
          console.log("🚀 ~ add:", next - curr)
        } else {
          result +=curr
          console.log("🚀 ~ add:",  curr)
      }
  }

  return result

};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('MCMXCIV'));
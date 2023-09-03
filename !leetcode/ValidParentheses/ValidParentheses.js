/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const dict = {'(': ')','{': '}','[':']'}
  const stack = []
  for(let i = 0; i < s.length; i++) {
      if(s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
          stack.push(s[i])
      } else {
          const last = stack.pop()

          if (dict[last] !== s[i]) {
              return false
          }
      }
  }

  return stack.length === 0
};
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  
};


// O(log n)
function IntToBinary (num) {
  const bits = []
  let i = 0

  let count = 0

  if (num === 0) return '0 - 0'

  while (num > 0) {
    bits[i++] = num % 2
    if (num % 2 === 1) count++ 
    num = Math.floor(num / 2)

    // console.log("🚀 ~ bits:", bits)
  }

  return bits.reverse().join('') + ' - ' + count
}

// console.log(0, IntToBinary(0));
// console.log(1, IntToBinary(1));
// console.log(2, IntToBinary(2));
// console.log(3, IntToBinary(3));
// console.log(4, IntToBinary(4));
// console.log(5, IntToBinary(5));
// console.log(6, IntToBinary(6));

for(let i = 0; i <= 20; i++) {
  console.log(i, IntToBinary(i));
}

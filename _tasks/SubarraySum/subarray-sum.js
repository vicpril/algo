/**
 * Подотрезок с суммой X
Дан массив целых чисел. 
Нужно найти и вернуть количество подотрезков (непрерывных подпоследовательностей) с заданной суммой k. 
Если это невозможно, функция должна вернуть 0.
 */

// ([1, 1, 1], 2) -> 2
// ([1, 2, 1], 3) -> 2
// ([1, 2, 5, 3], 3) -> 2
// ([10, 5, 6, 7, 8, 7], 15) -> 3

// HashMap - sum: count

function subarraySum(nums, k) {
  const hash = {0: 1}
  let count = 0
  let sum = 0

  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const toRemove = sum - k

    if(hash[toRemove]) {
      count += hash[toRemove]
    } 

    hash[sum] = (hash?.[sum] || 0) + 1 
  }
  return count
}

console.log(subarraySum([1, 1, 1], 2)) // -> 2
console.log(subarraySum([1, 2, 1], 3)) // -> 2
console.log(subarraySum([1, 2, 5, 3], 3)) // -> 2
console.log(subarraySum([10, 5, 6, 7, 8, 7], 15)) // -> 3
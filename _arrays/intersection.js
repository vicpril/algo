const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

// Неотсортированные = O(n^2)
// function findEqualElements(arr1, arr2) {
//   const result = []
//   arr1.forEach((el) => {
//     let found = false
//     let j = 0
//     while (!found && j < arr2.length) {
//       if (el === arr2[j]) {
//         result.push(el)
//         arr2[j] = undefined
//         found = true
//       }
//       j++
//     }
//   })
//   return result
// }

// Отсортированные = O(n)
function findEqualElements(arr1, arr2) {
  let i = 0
  let j = 0

  const result = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++
    } else 
    if (arr1[i] > arr2[j]) {
      j++
    } else {
      result.push(arr1[i])
      i++
      j++
    }
  }

  return result
}

// Примеры
console.log(findEqualElements([1, 2, 3], [2])) // => [2]
console.log(findEqualElements([2], [1, 2, 3])) // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])) // => [2, 2]
console.log(findEqualElements([2, 2, 2, 2], [1, 2, 2, 3])) // => [2, 2]
console.log(findEqualElements(a, b)) // => [2, 7, 19]
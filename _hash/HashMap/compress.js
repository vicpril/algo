/**
 * Свёртка в диапазоны
Дан список переменных типа Number. Повторяющихся элементов в нём нет. 
Преобразуйте это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. 
Если был передан пустой массив, необходимо вернуть строку "undefined".
 */

// compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'
// compress([1, 4, 3, 2]) // '1-4'
// compress([1, 4]) // '1,4'

function compress(list) {
  if (!list.length) return "undefined"

  const res = []

  // сортировка + проход + join O(n*log(n)) + O(n)
  list.sort((a,b) => a - b)
  
  let j = 0
  let l = list[0]
  let r = list[0]
  for(let i = 1; i < list.length; i++) {
    res[j] = (r !== l ? `${l}-${r}`: `${l}`)
    if (list[i] === r + 1) {
      r = list[i]
    } else {
      j++
      l = list[i]
      r = list[i]
    }
  }
  res[j] = (r !== l ? `${l}-${r}`: `${l}`)

  return res.join(',')

}


console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])) // '1-4'
console.log(compress([1, 4])) // '1,4'
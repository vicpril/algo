// Дан массив чисел
// Найти 3е минимальное

const arr = Array.from({length: 10}, () => Math.round((Math.random() - 0.5) * 10))

console.log("🚀 ~ arr:", arr)

/**
 * Запист в память
 * Сложность - скорость: O(n)
 * Сложность - память: - O(1)
 */
const find3rdMin = (arr) => {
  if (arr.length < 2) return null 

  const res = [arr[0], arr[0], arr[0]] // очередь 3 лоемента
  for(let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    if (curr >= res[2]) {
      
    } else 
    if (curr >= res[1]) {
      res[2] = curr
    } else 
    if (curr >= res[0]) {
      res[2] = res[1]
      res[1] = curr
    } else {
      res[2] = res[1]
      res[1] = res[0]
      res[0] = curr
    }
  }
  
  return res[2]
}


/**
 * Сортировка
 * Сложность - скорость: O(n*logn)
 * Сложность - память: - O(1)
 */
const find3rdMinSort = (arr) => {
  return arr.sort((a,b)=> a - b)[2] ?? null
}

// Дан массив чисел
// Найти n-e минимальное - среднее
const findNthMin = (arr, n = Math.ceil(arr.length / 2)) => {
  if (n > arr.length) return null 
  console.log("🚀 ~ n:", n)
  // 

  let res = arr[0]
  let nLarger = null
  let nSmaller = null

  let flag = 0 // 1 - добавил nLarger, -1 добавил nSmaller

  for (i = 1; i < arr.length - 1; i++) {
    const curr = arr[i]
    if (curr > res) {
      if (flag !== 1) {
        if (nLarger === null || curr < nLarger) {
          nLarger = curr
          flag++
        }

      } else {
        nSmaller = res
        res = curr
        flag = 0
      }
    } else {
      if (flag !== -1) {
        if (nSmaller === null || curr > nSmaller) {
          nSmaller = curr
          flag = -1
        }

      } else {
        nLarger = res
        res = curr
        flag = 0
      }
    }
    console.log([nSmaller, res, nLarger]);
  }

  

  return res
  
}

/**
 * Сортировка
 * Сложность - скорость: O(n*logn)
 * Сложность - память: - O(1)
 */
const findNthMinSort = (arr, n) => {
  if (n > arr.length) return null 
  return arr.sort((a,b)=> a - b)[n] ?? null
}


const startTimer = Date.now()
// const result = find3rdMinSort(arr)
// const result = find3rdMin(arr)
// const result = findNthMinSort(arr, Math.floor(arr.length / 2))
const result = findNthMin(arr)

const endTimer = Date.now()
console.log("🚀 ~ arr sorted:", arr.sort((a,b) => a - b))

console.log('Ответ:', result);
console.log('Время:', endTimer - startTimer, ' ms');


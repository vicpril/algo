/**
 * Пересечение интервалов
 * Даны два отсортированных списка с временными интервалами, когда пользователи были в сети. 
 * Начало интервала строго меньше конца. 
 * Напишите функцию, которая находит интервалы, когда оба пользователя были онлайн.
 */

intersection(
  [[8, 12], [17, 22]],
  [[5, 11], [14, 18], [20, 23]]
) // [[8, 11], [17, 18], [20, 22]]

intersection(
  [[9, 15], [18, 21]],
  [[10, 14], [21, 22]]
) // [[10, 14]]


/**
 *  Решение указателями.
 * Сложность по времени O(n+m)
 * Сложность памяти О(1)
 */
function intersection(user1, user2) {
  let i = 0
  let j = 0

  const result = []

  while (i < user1.length && j < user2.length) {
    const int1 = user1[i]
    const int2 = user2[j]

    const left = Math.max(int1[0], int2[0])
    const right = Math.min(int1[1], int2[1])

    if (left < right) result.push([left, right])

    int1[1] > int2[1] ? j++ : i++
  }

  return result
}
// function intersection(user1, user2) {
//   let i = 0
//   let j = 0

//   const result = []

//   while (i < user1.length && j < user2.length) {
//     const int1 = user1[i]
//     const int2 = user2[j]

//     const resInt = []

//     if (int2[1] < int1[0]) {
//       j++
//     } else 
//     if (int1[1] < int2[0]) {
//       i++
//     }
//     else {
//       // есть пересечения

//       // начало пересечения
//       if (int1[0] < int2[0]) {
//         resInt[0] = int2[0]
//       } else {
//         resInt[0] = int1[0]
//       }

//       // конец пересечения
//       if(int1[1] > int2[1]){
//         resInt[1] = int2[1]
//       } else {
//         resInt[1] = int1[1]
//       }

//       if (resInt[0] !== resInt[1]) result.push(resInt)

//       if (int1[1] > int2[1]) {
//         j++
//       } else {
//         i++
//       }
//     }
//   }

//   return result
// }

console.log(intersection(
  [[8, 12], [17, 22]],
  [[5, 11], [14, 18], [20, 23]]
)) // [[8, 11], [17, 18], [20, 22]]

console.log(intersection(
  [[9, 15], [18, 21]],
  [[10, 14], [21, 22]]
)) // [[10, 14]]
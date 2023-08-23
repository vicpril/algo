/**
 * Перестановка по DI
Дана строка S произвольной длины N, в которой существует только два символа:
I (increase),
D (decrease).
Необходимо реализовать такую перестановку A, чтобы для всех i=[0, 1, ..., N - 1] были верны следующие правила:
Если S[i] === 'I' ⇒ A[i] < A[i+1];
Если S[i] === 'D' ⇒ A[i] > A[i+1].
Сложность алгоритма по времени — O(n).
 */

function match(str) {
  // Код здесь
  let l = 0
  let r = str.length
  const result = []

  for(let i=0; i < str.length; i++) {
    if (str.charAt(i) === 'I') {
      result.push(l)
      l++
    } else 
    if (str.charAt(i) === 'D')  {
      result.push(r)
      r--
    }
  }

  result.push(l)

  // console.log("🚀 ~ result:", result)
  return result
}

match('III') // [0,1,2,3]
match('DDI') // [3,2,0,1]
match('IDID') // [0,4,1,3,2]
match('') // [0,4,1,3,2]
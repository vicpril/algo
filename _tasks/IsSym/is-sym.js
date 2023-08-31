/**
 * Вертикальная ось симметрии
Дан массив точек с целочисленными координатами (x, y). 
Определите, существует ли вертикальная прямая, делящая точки на 2 множества, симметричных относительно этой прямой.
На вход подаётся массив из точек в формате [x, y]: [[0, 0], [1, 1], ...]. 
Если на вход подали не массив, необходимо вернуть ошибку 'points must be array'.
Если точек нет, можно считать, что такая прямая есть. 
То есть функция должна вернуть true, если в качестве аргумента передали пустой массив.
 */

/**
 * @param {([number, number])[]} points
 * @returns {boolean}
 */
function isSym(points) {
  if (!Array.isArray(points)) throw new Error('points must be array')

  if (points.length < 2) return true

  // Предполагаемая x
  const x = points.reduce((res, [px, _] ) => (res + px), 0) / points.length
  console.log("🚀 ~ x:", x)

  // Считаем расстояния по y
  const hash = new Map() // 'dx..dy' to 0: count

  for(let i = 0; i < points.length; i++) {
    const [px, py] = points[i]

    if (px === x) continue

    const dy = py - 0
    const dx = px - x

    const currP = `${dx}..${dy}`
    const oppP = `${-dx}..${dy}`

    if (hash.get(oppP)) {
      hash.set(oppP, hash.get(oppP) - 1)
    } else {
      hash.set(currP, (hash.get(currP) || 0) + 1)
    }

  }
  return ![...hash.values()].filter(count => count !== 0).length
}

// ('asdasd') error
console.log(isSym([[]])) // true
console.log(isSym([[1,1]])) // true
console.log(isSym([[1,1], [-1, 1]])) // true
console.log(isSym([[1,1], [-1, 2]])) // false
console.log(isSym([[2,2],[1,1], [3, 1]])) // false
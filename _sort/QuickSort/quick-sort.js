/**
 * Алгоритм быстрой сортировки
Реализуйте алгоритм быстрой сортировки, применяя функцию partition. Её вы написали в прошлой задаче.
 */

const { partition } = require('./partition.js')

function quickSort(arr, start = 0, end = arr.length - 1) {
	if (end <= start) return arr

  const pivotIndex = partition(arr, start, end)

	quickSort(arr, start, pivotIndex - 1);
	quickSort(arr, pivotIndex + 1, end);

	return arr;
}

const test = [3,45,6,2,344,6,73,3456,24,567,0]

console.log( quickSort(test) )
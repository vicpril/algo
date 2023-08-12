// const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {
  // code
  let l = 0
  let r = list.length-1
  let middle
  
  while (l <= r) {
    middle = Math.floor((r+l)/2)
    if (list[middle] === element) {
      return middle
    } else
    if (list[middle] > element) {
      r = middle - 1
    } else {
      l = middle + 1
    }
  }
  return -1
}

const list = [1, 3, 4, 5, 7, 10]
console.log(binarySearch(list, 10));

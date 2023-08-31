/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let node1 = l1
  let node2 = l2
  let memory = 0

  let head = null
  let tail = null
  
  while(node1 || node2 || memory) {
      const number = (node1?.val ?? 0) + (node2?.val ?? 0) + memory
      const val = number % 10
      memory = Math.floor(number / 10)

      const node = createListNode(val, null)

      if (!tail) {
        tail = node
        head = node
      } else {
        const prev = tail
        tail = node
        prev.next = tail
      }

      node1 = node1?.next ?? null
      node2 = node2?.next ?? null
  }

  return head
};



function createListNode(val, next) {
return {
    val: val===undefined ? 0 : val,
    next: next===undefined ? null : next
}
}
// function revert (head) {
//   let node = head
//   let prev = null
//   let next = null

//   while(node) {
//       next = node.next
//       node.next = prev
//       prev = node
//       node = next
//   }
//   return prev
// }
// testing
const createList = arr => {
  let node = null
  for (let i = arr.length - 1; i >= 0; i--) {
    node = createListNode(arr[i], node)
  }
  return node
}

// const l1 = createList([2,4,3])
// const l2 = createList([5,6,4])
// const l1 = createList([9,9])
// const l2 = createList([9])
const l1 = createList([9,9,9,9,9,9,9])
const l2 = createList([9,9,9,9])

const res = addTwoNumbers(l1, l2)

console.log("🚀 ~ res:", res)

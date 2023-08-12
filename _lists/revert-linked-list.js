/**
 * Развернуть односвязный список
Дан односвязный список. Напишите функцию, которая его разворачивает. 
Должен получиться новый список, элементы которого расположены в обратном порядке.
Важно: реализуйте алгоритм за константную память О(1) и за линейное время О(n).
 */

/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

function ListNode(value, next) {
    this.value = (value === undefined ? 0 : value)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head) {
  let node = head;
  let prev = null;
  let next = null;
  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev
}

// // const list = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
// const list = ListNode(1, ListNode(2))
// // console.log("🚀 ~ list:", list)
// let value = list.value
// let next = list
// while (next) {
//   console.log(`${value} -> `)
//   // console.log(`next: ${node.next}`)
//   value = next.next?.value
//   next = next.next
// }

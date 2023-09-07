/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     let node1 = list1
//     let node2 = list2

//     let head = null
//     let tail = null

//     const addNode = (node) => {
//         if (!tail) {
//             head = node
//             tail = head
//         } else {
//             tail.next = node
//             tail = tail.next
//         }
//     }

//     while (node1 && node2) {
//         if (node1.val > node2.val) {
//             addNode(node2)
//             node2 = node2.next
//         } else {
//             addNode(node1)
//             node1 = node1.next
//         }
//     }

//     if(node1) {
//         addNode(node1)
//     } else {
//         addNode(node2)
//     }

//     return head

// };
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2
  if(!l2) return l1
  if(l1.val > l2.val) {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
  } else {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  }
}
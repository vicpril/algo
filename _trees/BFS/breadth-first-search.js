/**
 * Алгоритм поиска в ширину
Реализуйте алгоритм поиска в ширину для дерева. 
На вход подаётся корень дерева и искомое значение. 
Требуется вернуть ноду, значение которой совпадает с искомым либо undefined. 
Каждая нода имеет такую структуру:
{
  value: 5, // значение ноды
  children: [] // массив детей в таком же формате
} 
 */

function BFS(root, value) {
  if (!root) return undefined

  const queue = [root]

  while (queue.length) {
    const node = queue.shift()

    if (node.value === value) return node

    queue.push(...node.children)
  }
  
  return undefined
}
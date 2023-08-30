/**
 * Алгоритм поиска в глубину
Реализуйте алгоритм поиска в глубину pre-order для дерева. 
На вход подаётся корень дерева и искомое значение. 
Требуется вернуть ноду, значение которой совпадает с искомым либо undefined. 
Каждая нода имеет такую структуру:
{
        value: 5, // значение ноды
        children: [] // массив детей в таком же формате
} 
Примените любую реализацию: итеративную или рекурсивную.
 */

// рекурсия
function DFS(node, value) {
  if(node.value === value) return node

  for(const child of node.children) {
    const result = DFS(child, value)
    if(result) return result
  }
 
  return undefined
} 

// итерация - стек
function DFS(node, value) {
  const stack = [node]

  while(stack.length) {
    const node = stack.pop()
    if(node.value === value) return node
    stack.push(...node.children)
  }
 
  return undefined
} 
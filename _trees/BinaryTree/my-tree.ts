interface TNode<T extends number> {
  value: T
  left: TNode<T> | null
  right: TNode<T> | null
}

class MyBinaryTree<T extends number> {
  private root: TNode<T> | null

  protected createNode = (value: T): TNode<T> => ({
    value,
    left: null,
    right: null
  })

  insert = (value: T) => {
    const currentNode = this.createNode(value)

    if (!this.root) {
      this.root = currentNode
      return this
    } 

    const traverse = (node: TNode<T>) => {
      if (currentNode.value > node.value) {
        if (!node.right) {
          node.right = currentNode
        } else {
          traverse(node.right)
        }
      } else if (currentNode.value < node.value) {
        if (!node.left) {
          node.left = currentNode
        } else {
          traverse(node.left)
        }
      }
    }

    traverse(this.root)

    return this
  }
}
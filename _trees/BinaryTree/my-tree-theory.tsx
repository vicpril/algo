// Интерфейс для описания одного узла дерева
interface INode<U> {
  value: U
  left: INode<U> | null
  right: INode<U> | null
}

class BinaryTree<U> {
    // Корень дерева
  private root: INode<U> | undefined

    // Сздание новго узла дерева
  protected createNewNode = (value: U): INode<U> => {
    return {
      value,
      left: null,
      right: null,
    }
  }

  // "Встраивание" нового элемента в дерево 
  insert = (value: U) => {
    const currentNode = this.createNewNode(value)
        // Проверям есть ли корневой элемент
    if (!this.root) {
            // Если нет, то новый элемен - корневой
      this.root = currentNode
    } else {
            // Если есть корневой элемент, то добавляем новый узел
      this.insertIntoCurrentNode(currentNode)
    }
    return this
  }

    // Вставка нового узла в дерево
  protected insertIntoCurrentNode = (currentNode: INode<U>) => {
    const { value } = currentNode
        // Функция для рекурсивного обхода дерево и вставки нового узла
    const traverse = (node: INode<U>) => {
            // Сравниваем значение текущей и целевой нод
      if (value > node.value) {
        if (!node.right) {
                    // Если значение текущей ноды больше, и у целевой нет правого ребенка, 
                    // то встраиваем целевую ноду на местоправого ребенка
          node.right = currentNode
        } else {
                    // Если места заняты, то идем искать дальше
                    traverse(node.right)
                }
            // Аналогично для противоположного кейса 
      } else if (value < node.value) {
        if (!node.left) {
          node.left = currentNode
        } else {
                        traverse(node.left)
                }
      }
    }
        // Начинаем искать места с корня дерева
    traverse(this.root as INode<U>)
  }
}
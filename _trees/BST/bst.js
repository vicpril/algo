/**
 * Бинарный поиск
Дополните реализацию методов addNode и removeNode, 
и самостоятельно реализуйте методы findMax и find бинарного дерева поиска.
 */

class BST {
  constructor() {
      this.root = null;
  }

  // Создаёт ноду со значением value и помещает в дерево
  add(value) {
      const newNode = { value, left: null, right: null };

      if (this.root === null) {
          this.root = newNode;
      } else {
          this.addNode(this.root, newNode);
      }
  }
  
  // Вспомогательный метод для добавления newNode как потомка к node
  addNode(node, newNode) {
      // нода с таким значением уже есть
      if (newNode.value === node.value) {
          return;
      }
      
      if (newNode.value < node.value) { // добавляем ноду слева
          // если элемента слева нет, присваиваем newNode
          if (node.left === null) {
              node.left = newNode
          } else {
              // если есть, рекурсивно вызываем вставку ноды на левой части
              this.addNode(node.left, newNode);
          }
      } else { // добавляем ноду справа
          // если элемента справа нет, присваиваем newNode
          if (node.right === null) {
              node.right = newNode
          } else {
              // если есть, рекурсивно вызываем вставку ноды на правой части
              this.addNode(node.right, newNode);
          }
      }
  }

  // Удаляет ноду со значением value из дерева
  remove(value) {
      this.root = this.removeNode(this.root, value);
  }
  
  // Вспомогательный метод для удаления вершины со значением value
  // из дерева от вершины node. Возвращает новую вершину на замену node.
  removeNode(node, value) {
      // если вершина null
      if (node === null) {
          return null;
      }

      // если значение вершины равно удаляемому значению
      if (value === node.value) {
          if (node.left === null && node.right === null) {
              // если нет детей, вершина должна стать null	
              return node = null;
          } else if (node.left === null) {
              // если слева нет детей, заменяем вершину на правого ребёнка
              return node = node.right;
          } else if (node.right === null) {
              // если справа нет детей, заменяем вершину на левого ребёнка
              return node = node.left;
          } else {
              // если оба ребёнка есть, ищем максимальный элемент слева
              const max = this.findMax(node.left);

              node.value = max.value;
              // запускаем удаление значения в левой части
              node.left = this.removeNode(node.left, value);

              return node;
          }
      }

      if (value < node.value) { 
          // если значение меньше, рекурсивно удаляем значение из левой части
          node.left = this.removeNode(node.left, value);
      } else {
          // если значение больше, рекурсивно удаляем значение из правой части
          node.right = this.removeNode(node.right, value);
      }

      return node;
  }
  
  // Ищет максимальный элемент, начиная с вершины node.
  findMax(node) {
    if (!node.right) return node
    return this.findMax(node.right)
  }
  
  // Возвращает элемент, значение которого равно value.
  // Если элемент не найден, возвращает null.
  find(value) {
    if(!this.root) return null

    let node = this.root

    while(node) {
      if (node.value === value) return node

      if(node.value > value) {
        if (node.left === null) return null
        node = node.left
      } else {
        if (node.right === null) return null
        node = node.right
      }
    }

    return null
  }
}
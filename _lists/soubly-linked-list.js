class DoublyLinkedList {
  constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
  }

  chechIndex(index) {
    if (index > this.size - 1 && index < 0) {
      throw new Error('Индекс за пределами')
    }
  }

  log(command = 'Print') {
    let target = this.head
    const res = []
    for (let i = 0; i < this.size; i++) {
      res.push(target?.value)
      target = target?.next
    }
    console.log(`${command}:`, ...res);
    console.log('Size:', this.size);
  }
  
  // Добавляет элемент в список.
  // Если указан индекс - добавляет по индексу, 
  // в противном случае добавляет в конец.
  // Если индекс за пределами — кидает ошибку.

  // index = O(n), to the end = O(1)
  add(value, index) {
      const node = createNode(value);
      if (index === undefined) {
        if (this.size === 0) {
          this.head = node
          this.tail = node
        } else {
          node.prev = this.tail
          this.tail.next = node
          this.tail = node
        }
      } else {
        this.chechIndex(index)
        const nextNode = this.searchByIndex(index)
        // console.log("🚀 ~ nextNode:", nextNode)
        const prevNode = nextNode.prev
        if (prevNode) {
          prevNode.next = node
          node.prev = prevNode
        } else {
          this.head = node
        }

        node.next = nextNode
        nextNode.prev = node
      }
      this.size++
      this.log('Add')
  }
  
  // Удаляет элемент из списка по значению.
  // Удаляет только первый найденный элемент.
  // Если элемент не найден, ничего делать не нужно.
  // O(n)
  removeByValue(value) {
    const target = this.searchByValue(value)
    if (!target) return
    const prevNode = target.prev
    const nextNode = target.next
    if (prevNode) {
      prevNode.next = target.next
    } else {
      this.head = nextNode
    }
    if (nextNode) {
      nextNode.prev = target.prev
    } else {
      this.tail = prevNode
    }
    // if (target.prev) target.prev.next = target.next
    // if (target.next) target.next.prev = target.prev
    // target = null
    this.size--
    this.log('removeByValue')
  }
  
  // Удаляет элемент из списка по индексу.
  // Если индекс за пределами — кидает ошибку.
  // O(n)
  removeByIndex(index) {
    this.chechIndex(index)
    const target = this.searchByIndex(index)
    const prevNode = target.prev
    const nextNode = target.next
    if (prevNode) {
      prevNode.next = target.next
    } else {
      this.head = nextNode
    }
    if (nextNode) {
      nextNode.prev = target.prev
    } else {
      this.tail = prevNode
    }
    // target = null
    this.size--
    this.log('removeByIndex')
  }
  
  // Ищет элемент в списке по индексу.
  // Если индекс за пределами — кидает ошибку.
  // O(n)
  searchByIndex(index) {
      this.chechIndex(index)
      let result = this.head
      let i = 0
      while (i < index) {
        result = result.next
        i++
      }
      return result
  }

  // Ищет элемент в списке по значению.
  // Возвращает первый найденный элемент.
  // Опционально можно указать индекс начала поиска.
  // Если индекс за пределами — кидает ошибку.
  // Если элемент не найден, нужно вернуть null.
  // O(n)
  searchByValue(value, startIndex = 0) {
    this.chechIndex(startIndex)
    let target = this.head
    for (let i = startIndex; i < this.size; i++) {
      if (target.value === value) return target
      target = target.next
    }
    return null
  }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  };
}

// const list = new DoublyLinkedList()

// list.add(1)
// list.add(2)
// list.add(3)
// list.add(4, 0)
// list.add(5, 0)
// list.add(6, 1)
// list.add(7, 5)

// list.removeByIndex(5)
// list.removeByValue(1)
// list.removeByValue(2, 1)
// list.removeByValue(5, 2)
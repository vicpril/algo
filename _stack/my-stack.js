class Stack {
  constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
  }

  // Кладёт элемент на стек.
  // Возвращает новый размер стека.
  push(value) {
      const node = { value, next: null, prev: null };
      if (!this.head) this.head = node
      if (this.tail) {
          this.tail.next = node
          node.prev = this.tail
      } 
      this.tail = node
      this.size++
      return  this.size
  }
  
  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
    if (!this.size) throw new Error("Ошибка")
    const node = {...this.tail}
    if (this.tail.prev){
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }
    this.size--
    return node
  }
  
  // Возвращает верхний элемент стека без его удаления.
  peek() {
    return this.tail
  }
  
  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
      return !this.size
  }
}
class Queue {
  constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
  }
  
  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
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
  
  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
  if (!this.size) throw new Error("Ошибка")
      const node = {...this.head}
      if (this.head.next){
        this.head = this.head.next
        this.head.prev = null
      } else {
        this.head = null
        this.tail = null
      }
      this.size--
      return node
  }
  
  // Возвращает элемент в начале очереди.
  peek() {
  return this.head
  }
  
  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
  return !this.size
  }
}
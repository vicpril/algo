/**
 * Бинарная куча
Реализуйте бинарную кучу для работы с числами. 
Поддержите операцию добавления новых элементов и удаления корневого элемента.
 */

class BinaryHeap {
  constructor() {
      // Массив для хранения данных.
      this.data = [];
  }

  getParentIndex(currentIndex) {
    const index = Math.floor((currentIndex - 1) / 2)
    if (index < 0 || index > this.data.length) {
      return null
    }
    return index
  }

  getLeftChild(i) {
    return this.data[i * 2 + 1]
  }

  getRightChild(i) {
    return this.data[i * 2 + 2]
  }

  swap(i, j) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  bubbleUp(currentIndex) {
    const parentIndex = this.getParentIndex(currentIndex)
    if (parentIndex !== null && this.data[parentIndex] < this.data[currentIndex]) {
      this.swap(currentIndex, parentIndex)
      this.bubbleUp(parentIndex)
    }
  }

  
  // Добавление элемента.
  insert(node) {
    this.data.push(node)
    this.bubbleUp(this.data.length - 1)
  }

  sinkDown(currentIndex) {
    const lChild = this.getLeftChild(currentIndex)
    const rChild = this.getRightChild(currentIndex)
    if (this.data[currentIndex] < lChild || this.data[currentIndex] < rChild) {
      const targetIndex = lChild > rChild ? currentIndex * 2 + 1 : currentIndex * 2 + 2
      this.swap(currentIndex, targetIndex)
      this.sinkDown(targetIndex)
    }
  }
  
  // Удаление корневого элемента.
  // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
  extract() {
    if (!this.data[0]) return undefined

    const result = this.data[0]

    if (this.data.length === 1) {
      this.data = []
    } else {
      this.data[0] = this.data[this.data.length - 1]
      this.data.pop()
      this.sinkDown(0)
    }

    return result
  }
}
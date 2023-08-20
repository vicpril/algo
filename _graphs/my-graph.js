/**
 * Неориентированный граф
Реализуйте неориентированный граф с хранением данных в виде списка смежности с операциями добавления и удаления вершин и рёбер. 
Вершины в этом графе — всегда строки. Граф должен быть простым (не иметь петель и кратных ребер).
Хранить информацию о графе нужно в объекте data, где ключами являются вершины, а значением, массив смежных вершин.
 */

class Graph {
  constructor() {
      this.data = {};
  }
  
  // Добавляет вершину.
  // Если вершина уже существует, ничего не делает.
  addVertex(vertex) {
    if (typeof vertex !== 'string') return
    if (this.data[vertex]) return

    this.data[vertex] = []
  }
  
  // Удаляет вершину.
  removeVertex(vertex) {
    if (!this.data[vertex]) return

    this.data[vertex].forEach(target => {
      this.removeEdge(vertex, target)
    });

    delete this.data[vertex]
  }
  
  // Добавляет грань между двумя вершинами.
  addEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2 || !this.data[vertex1] || !this.data[vertex2] || vertex1 === vertex2) return

    this.data[vertex1] = [...(new Set([...this.data[vertex1], vertex2]))]
    this.data[vertex2] = [...(new Set([...this.data[vertex2], vertex1]))]
  }
  
  // Удаляет грань между двумя вершинами.
  removeEdge(vertex1, vertex2) {
    if (!this.data[vertex1] || !this.data[vertex2]) return

    this.data[vertex1] = this.data[vertex1].filter(edge => edge !== vertex2)
    this.data[vertex2] = this.data[vertex2].filter(edge => edge !== vertex1)
  }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');

console.log(graph.data);
/*
{
A: ['B', 'C'],
B: ['A'],
C: ['A'],
D: []
}
*/
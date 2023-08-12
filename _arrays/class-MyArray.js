class MyArray {
	constructor(initialSize = 1) {
		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
			throw new Error('Длина массива должна быть целым числом');
		}

		if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

		this.size = initialSize;
		this.memory = allocate(initialSize);
		this.length = 0;
	}
  
    checkIndex(index) {
      if (+index >= this.length || +index < 0) {
        throw new Error('Неверный индекс')
      }
    }
	
	// Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
	get(index){
	  this.checkIndex(index)
      return this.memory[index]
	}
	
	// Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
	set(index, value) {
      this.checkIndex(index)
      this.memory[index] = value
	}

	// Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
	// В противном случае — добавляет по индексу со сдвигом
	// всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
	// Увеличивает выделенную память вдвое, если необходимо.
	// Возвращает новую длину массива.
	add(value, index) {
            
        const checkMemory = () => {
          if (this.length + 1 > this.size) {
            this.size *= 2
            const newMemory = allocate(this.size)
            for (let i = 0; i < this.length; i++) {
              newMemory[i] = this.memory[i];
            }
            this.memory = newMemory
          }
        }
        
     
        if (index === undefined) {
          checkMemory()
          this.memory[this.length] = value
          this.length += 1
        } else {
          
          this.checkIndex(index)   
         
          checkMemory()
          for (let i=this.length - 1; i >= +index; i--) {
            this.memory[i+1] = this.memory[i]
          }
          this.memory[index] = value
          this.length += 1
        }
     console.log('sise:', this.size, 'length:', this.length, this.memory);
      
      return this.length
	}
	
	// Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
	// Возвращает новую длину массива.
	delete(index) {
		this.checkIndex(index)
      
    for (let i=+index; i < this.length-1; i++) {
      this.memory[i] = this.memory[i+1]
    }
    this.memory[this.length-1] = undefined
    this.length -= 1

    console.log('sise:', this.size, 'length:', this.length, this.memory);

    return this.length
	}
}

function allocate(size) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        memory[i] = undefined;
    }

    return memory;
}

// const arr = new MyArray(1)

// console.log('return:', arr.add(1))
// console.log('return:', arr.add(2))
// console.log('return:', arr.add(3, 0))
// console.log('return:', arr.add(4, 2))
// console.log('return:', arr.add(5, 3))
// // console.log(arr.add(1, 8))

// console.log(arr.get(3))
// console.log(arr.get(2))
// console.log(arr.get(1))
// console.log(arr.get(0))
// // console.log(arr.get(8))

// console.log(arr.set(2, 2222))
// console.log(arr.get(2))

// console.log('del return:', arr.delete(2))


const fizzBuzz = num => {
  return Array.from({length: num + 1}, (v,i) => {
    if (i === 0 ) return 0
    if (i % 3 === 0 && i % 5 === 0) return 'fizzbuzz'
    if (i % 3 === 0) return 'fizz'
    if (i % 5 === 0) return 'buzz'
    return i
  })
}

console.log(fizzBuzz(6));




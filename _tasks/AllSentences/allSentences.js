/**
 * Перебор сочетаний строк
Дан список слов. Каждое слово представлено массивом возможных вариантов нормализации. 
Напишите функцию, которая принимает список слов и возвращает функцию, 
которая при каждом вызове возвращает строку — одно из возможных сочетаний вариантов слова в предложении. 
Пока не вернёт все возможные варианты. Если все возможные варианты закончились, нужно вернуть undefined.
Важно: не используйте итераторы и рекурсию.
 */

// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

function allSentences(words) {
  const idx = words.map(i => 0)

  const join = () => idx.map((i, j) => words[j][i]).join(' ');
  
  const turnIndex = () => {
    idx[idx.length - 1]++;

    for(let i = idx.length - 1; i > 0; i--) {
      if (idx[i] < words[i].length) continue;
      
      idx[i] = 0;
      idx[i-1]++;
    } 
  }
  
  return function() {
    if (!words[0]) return undefined;

    if (idx[0] > words[0].length - 1) return undefined;
    
    const result = join();

    turnIndex();
    
    return result;
  }

}

const nextSentence = allSentences([
    ['внучка', 'внучок'],
    ['маша', 'махать', 'машу'],
    ['1', '2', '3'],
    // ... тут могут быть другие слова с любым количеством своих форм
]);

console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка махать'
// ... и т. д. все комбинации
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined
console.log(nextSentence()); // undefined


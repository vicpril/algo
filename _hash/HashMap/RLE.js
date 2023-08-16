/**
 * RLE
Дана строка, состоящая из букв A-Z: «AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB»
Напишите функцию rle(), которая на выходе даст строку вида:
«A4B3C2XYZD4E3F3A6B28»,
Сгенерирует любую ошибку, если на вход пришла невалидная строка.
Пояснения:
Если символ встречается 1 раз, он остаётся без изменений,
Если символ повторяется более 1 раза, к нему добавляется количество повторений.
 */

// REGEXP
// function rle(str) {
//   if (typeof str !== "string") {
//     throw new Error("Invalid string");
//   }
//   if (/[^A-Z]/.test(str)) {
//     throw new Error("Invalid string");
//   }

//   const replacer = (match, symbol) =>
//     `${symbol}${match.length > 1 ? match.length : ""}`;

//   return str.replace(/([A-Z])\1{0,}/g, replacer);
// }
function rle(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string");
  }
  if (/[^A-Z]/.test(str)) {
    throw new Error("Invalid string");
  }
  if(str === '') return ''

  let symbol = str[0]
  let count = 1
  let res = ''


  for (let i = 1; i < str.length; i++) {
    if(str[i] === symbol){
      count++
    } else {
      res += `${symbol}${count > 1 ? count.toString() : ''}`
      symbol = str[i]
      count = 1
    }
  }
  res += `${symbol}${count > 1 ? count.toString() : ''}`

  return res
}

console.log(rle(''));
console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));
console.log('A4B3C2XYZD4E3F3A6B28');
console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB') === 'A4B3C2XYZD4E3F3A6B28');

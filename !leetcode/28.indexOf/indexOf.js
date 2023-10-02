/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// O(n*m)
// var strStr = function(haystack, needle) {
//     const n = haystack.length
//     const m = needle.length
//     let l = 0, i = 0
//     let res = -1

//     while (l <= n - m) {
        

//         if (haystack[l + i] === needle[i]) {
//             if (i === m - 1) return l
//             i++
//         } else {
            
//             i = 0
//             l++
//         }

//     }

//     return -1
// };

/**
 * Solution #6 - KMP - Time: O(N+M) | KMP - Knuth-Morris-Pratt String Matching Algorithm
 * Preprocess the needle to form an array to store the occurs before.
 * Loop through the haystack and compare with needle.
 * If mismatch occurs, move the haystack index by the occurs before array.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// O(n+m)
var strStr = function (haystack, needle) {
  const needleLength = needle.length;
  let i = 0, j = -1;

  // LPS - Longest Prefix Suffix / Prefix table 
  const lps = [-1];
  while (i < needleLength - 1) {
    console.log(i + '-' + needle[i], j + '-' + needle[j], needle[i] === needle[j])
    
    if (j === -1 || needle[i] === needle[j]) {
      i++;
      j++;
      lps[i] = j;
    } else {
      j = lps[j];
    }
    console.log("🚀 ", lps)
  }
  console.log("🚀 ~ lps:", lps)


  i = 0, j = 0;
  while (i < haystack.length && j < needleLength) {
      if (haystack[i] === needle[j]) {
          i++;
          j++;
      } else {
          j = lps[j];
          if (j < 0) {
              i++;
              j++;
          }
      }
  }
  if (j === needleLength) {
      return i - j;
  }
  return -1;
}

console.log(strStr('leetcode', 'eeeeettt'));
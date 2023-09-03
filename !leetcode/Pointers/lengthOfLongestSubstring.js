/**
 * Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

// Решение двумя указателями и хэш-сетом
// Правый указатель двигается до тех пор пока не встретит повторяющися элемент
//    по дороге увеличивает счетчик и заполняет хэш
// Когда встретили повторение - двигаем левый указатель до следующего за посторенным
// Левый указатель удаляет данные из хэша

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0

    const hash = new Set()
    let l = 0, r = 0
    let count = 1

    while (r < s.length) {
        const tail = s[r]
        if (!hash.has(tail)) {
            count = Math.max(count, r - l + 1)
            hash.add(tail)
            
        } else {

            while (s[l] !== tail && l <= r) {
                hash.delete(s[l])
                l++
            }
            l++
        }
        r++
    }

    return count
};
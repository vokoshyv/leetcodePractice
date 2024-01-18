/**
 * @param {string} s
 * @return {number}
 */

/*

https://leetcode.com/problems/count-substrings-without-repeating-character/description/

- Hunting phase
    - right pointer moves forward as long as we have not encountered duplicates
- Catchup phase
    - left pointer moves forward until the substring contained by the range is 
      special

*/
var numberOfSpecialSubstrings = function(s) {
    let result = 0;

    let encountered = new Set();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        // hunting phase
        while (right < s.length && !encountered.has(s[right])) {
            encountered.add(s[right]);
            right++;
        }
        // catchup phase
        if (right >= s.length) {
            break;
        }

        // calculate previous special substring combos
        let priorRangeLength = right - left;
        result += (priorRangeLength * (priorRangeLength + 1) / 2);

        while (encountered.has(s[right])) {
            encountered.delete(s[left]);
            left++;
        }
    }

    let priorRangeLength = right - left;
    result += (priorRangeLength * (priorRangeLength + 1) / 2);

    return result;
};

// console.log(numberOfSpecialSubstrings('abca'));
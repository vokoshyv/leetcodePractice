/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getKey = (word) => {
    return word.split('').sort().join('');
}

var groupAnagrams = function(strs) {
    let words = {};
    let key;

    for (let str of strs) {
        key = getKey(str);
        if (key in words) {
            words[key].push(str);
        } else {
            words[key] = [str];
        }
    }

    let result = [];

    for (let key in words) {
        result.push(words[key]);
    }

    return result;
};
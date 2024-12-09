/**
 * @param {string} s
 * @return {boolean}
 */
let lib = new Set();
let toAdd = 'qwertyuiopasdfghjklzxcvbnm1234567890';
toAdd.split('').forEach((char) => {lib.add(char)});

var isPalindrome = function(s) {
    s = s.toLowerCase();

    let i = 0; 
    let j = s.length - 1;

    while (i < j) {
        while (i < s.length && !lib.has(s[i])) {
            i++;
        }
        while (j > -1 && !lib.has(s[j])) {
            j--;
        }

        if (i > j) {
            break;
        }


        if (s[i] !== s[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const check = (i, j) => {
        if (i >= s.length) {
            return true;
        }
        if (j >= t.length) {
            return false;
        }
        if (s[i] === t[j]) {
            return check(i + 1, j + 1);
        }
        return check(i, j + 1);
    }

    return check(0, 0);
};
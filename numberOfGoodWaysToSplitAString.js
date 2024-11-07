/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const freqRight = new Map();
    const freqLeft = new Map();
    let uniqLeft = 0;
    let uniqRight = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (freqRight.has(char)) {
            freqRight.set(char, freqRight.get(char) + 1);
        } else {
            freqRight.set(char, 1);
            uniqRight++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        freqRight.set(char, freqRight.get(char) - 1);
        if (freqRight.get(char) === 0) {
            freqRight.delete(char);
            uniqRight--;
        }

        if (freqLeft.has(char)) {
            freqLeft.set(char, freqLeft.get(char) + 1);
        } else {
            freqLeft.set(char, 1);
            uniqLeft++;
        }

        if (uniqLeft === uniqRight) {
            result++;
        }
    }

    return result;
};
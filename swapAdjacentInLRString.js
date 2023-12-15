/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {

    let word = start.split('');

    const transform = (i) => {
        if (i === start.length) {
            return true;
        }

        let result = true;

        if (word[i] === end[i]) {
            result = result || transform(i + 1);
        }
        if (i < word.length - 1) {
            if (word[i] === 'X' && word[i + 1] === 'L' && end[i] === 'L') {
                result = result || transform(i + 1);
            }
        } else {
            return false;
        }


        return result;
    }

    return transform(0);
};
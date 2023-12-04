/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
    const result = [];

    let buffer = [];

    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            for (let j = 0; j < i; j++) {
                buffer.push(currentState[j]);
            }

            buffer.push('--');

            for (let k = i + 2; k < currentState.length; k++) {
                buffer.push(currentState[k]);
            }
        }

        if (buffer.length > 0) {
            result.push(buffer.join(''));
        }
        buffer = [];
    }

    return result;
};

console.log(generatePossibleNextMoves("++++"));
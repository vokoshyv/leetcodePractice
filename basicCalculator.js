/**
 * @param {string}
 * @return {number}
 */
var calculate = function(s) {
    let str = removeSpaces(s);


    function solve(left, right) {
        let i = left;

        let result = 0;

        let operation = 1;

        while (i <= right) {
            if (str[i] === '(') {
                let closeIndex = findCloseIndex(i, str);
                result += operation * solve(i + 1, closeIndex - 1);
                i = closeIndex + 1;
            } else if (isDigit(str[i])) {
                let numEndIndex = findNumEndIndex(i, str);
                result += operation * parseInt(str.slice(i, numEndIndex));
                i = numEndIndex;
            } else if (str[i] === '-') {
                operation = -1;
                ++i;
            } else if (str[i] === '+') {
                operation = 1;
                ++i;
            }
        }

        return result;
    }

    return solve(0, str.length - 1);
};




function removeSpaces(s) {
    let str = [];

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ' ') {
            str.push(s[i]);
        }
    }

    return str.join('');
}


function findCloseIndex(openIndex, str) {
    let balance = 0;

    let i = openIndex;

    while (i < str.length) {
        if (str[i] === '(') {
            ++balance;
        } else if (str[i] === ')') {
            --balance;
        }

        if (balance === 0) {
            return i;
        }
        ++i;
    }
}


function isDigit(char) {
    return (char.charCodeAt() >= 48 && char.charCodeAt() <= 57);
}

function findNumEndIndex(startIndex, str) {
    let i = startIndex;

    while (i < str.length) {
        if (isDigit(str[i])) {
            ++i;
        } else {
            return i;
        }
    }
}

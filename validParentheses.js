/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const match = {
        ')': '(', 
        '}': '{', 
        ']': '[' 
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char in match) {
            let popped = stack.pop();

            if (match[char] !== popped) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
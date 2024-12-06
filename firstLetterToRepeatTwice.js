/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let lib = new Set();
    let sLength = s.length;

    for (let i = 0; i < sLength; i++) {
        let char = s[i];
        if (lib.has(char)) {
            return char;
        }
        lib.add(char);
    }
};
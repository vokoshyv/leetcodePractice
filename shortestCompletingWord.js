/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

const matches = (charFreq, licenseFreq) => {
    for (let key in licenseFreq) {
        if (!(key in charFreq)) {
            return false;
        }
        if (charFreq[key] < licenseFreq[key]) {
            return false;
        }
    }

    return true;
}

var shortestCompletingWord = function(licensePlate, words) {
    const charFreqs = [];
    for (let word of words) {
        let freq = {};
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (char in freq) {
                freq[char]++;
            } else {
                freq[char] = 1;
            }
        }
        charFreqs.push(freq);
    }

    // console.log("CHAR FREQ: ", charFreqs);

    const licenseFreq = {};

    for (let i = 0; i < licensePlate.length; i++) {
        let char = licensePlate[i].toLowerCase();
        if ('qwertyuiopasdfghjklzxcvbnm'.includes(char)) {
            if (char in licenseFreq) {
                licenseFreq[char]++;
            } else {
                licenseFreq[char] = 1;
            }
        }
    }

    // console.log("LICENSE FREQ: ", licenseFreq);

    let shortestLength = Infinity;
    let solution = "";

    for (let i = 0; i < charFreqs.length; i++) {
        let charFreq = charFreqs[i];
        if (matches(charFreq, licenseFreq)) {
            if (words[i].length < shortestLength) {
                solution = words[i];
                shortestLength = words[i].length;
            }
        }
    }

    return solution;
};

console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));
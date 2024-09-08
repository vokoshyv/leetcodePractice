/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let current = new Array(1001).fill(0);

    for (let trip of trips) {
        for (let i = trip[1]; i < trip[2]; i++) {
            current[i] = current[i] + trip[0];
        }
    }

    for (let i = 0; i < current.length; i++) {
        if (current[i] > capacity) {
            return false;
        }
    }

    return true;
};

console.log(carPooling([[2,1,5],[3,3,7]], 4));
console.log(carPooling([[2,1,5],[3,3,7]], 5));
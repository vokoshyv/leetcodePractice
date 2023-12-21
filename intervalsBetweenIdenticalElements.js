/**
 * @param {number[]} arr
 * @return {number[]}
 */




var getDistances = function(arr) {
    // obtain all the indexes first 
    let indexes = {};

    arr.forEach((item, index) => {
        if (item in indexes) {
            indexes[item].push(index);
        } else {
            indexes[item] = [index];
        }
    })

    // console.log("INDEXES: ", indexes);

    // Create prefix array to get sums in constant time

    let prefix = {};

    for (let key in indexes) {
        prefix[key] = [];
        let total = 0;
        indexes[key].forEach((index) => {
            total += index;
            prefix[key].push(total);
        })
    }

    // console.log("PREFIX: ", prefix);

    const result = new Array(arr.length);


    for (let key in indexes) {
        for (let i = 0; i < indexes[key].length; i++) {
            let diff = 0;
            let index = indexes[key][i];

            // left side
            let leftSum = (i > 0) ? prefix[key][i - 1] : 0;
            let leftCount = i;
            diff += Math.abs(leftSum - leftCount * index);

            // right side
            let rightSum = (i < indexes[key].length - 1) ? prefix[key][prefix[key].length - 1] - prefix[key][i] : 0;
            let rightCount = indexes[key].length - i - 1;
            diff += Math.abs(rightSum - rightCount * index);

            result[index] = diff;

            // console.log("RESULT: ", result);
        }
    }

    return result;
};

console.log("RESULT: ", getDistances([2,1,3,1,2,3,3]));

/*

[2,5,6,10]

[15, 9, 9, 17]



*/


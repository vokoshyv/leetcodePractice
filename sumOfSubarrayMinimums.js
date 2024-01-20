/**
 * @param {number[]} arr
 * @return {number}
 */

const convert = (ans) => {
    return ans % (Math.pow(10, 9) + 7) 
}


var sumSubarrayMins = function(arr) {
    let result = 0;
    const stacks = [];
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let elem = arr[i];
        let currStacksLength = stacks.length
        for (let j = 0; j < currStacksLength; j++) {
            let arr = stacks[j];
            if (arr[arr.length - 1] < elem) {
                arr.push(arr[arr.length - 1]);
            } else {
                arr.push(elem);
            }
        }
        stacks.push([elem]);
    }

    // console.log("STACKS: ", stacks);

    let currStacksLength = stacks.length;
    
    for (let i = 0; i < currStacksLength; i++) {
        let currArrLength = stacks[i].length;
        for (let j = 0; j < currArrLength; j++) {
            result += convert(stacks[i][j]);
        }
    }

    return convert(result);
};

console.log(sumSubarrayMins([3,1,2,4]));

/*

[3,1,2,4]

stack = [3,1,1,1]

stack = [1,1,1]

stack = [2,2]

stack = [4]

*/
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  let prevTapsOn = ranges.length + 1;
  let currentTapsOn = ranges.length;

  let i = 0;
  let j;

  while (currentTapsOn !== prevTapsOn) {
    prevTapsOn = currentTapsOn;
    i = 0;

    while (i < ranges.length) {
      j = i + 1;
      while (ranges[j] === 0) {
        j++;
      }
      if (j < ranges.length) {
        combine(ranges, i, j);
        i = j;
      } else {
        break;
      }
    }

    // count how many currentTapsOn there are
    currentTapsOn = 0;
    for (let tap of ranges) {
      if (tap !== 0) {
        currentTapsOn++;
      }
    }
  }

  console.log(JSON.stringify(ranges));

  return (completeCover(ranges)) ? currentTapsOn : -1;
};

// let's try a mergesort like algorithm

function combine(ranges, i, j) {
  let ith = ranges[i];
  let jth = ranges[j];

  if ((ith + i) >= ranges.length - 1 && (j - jth) >= (i - ith)) {
    ranges[j] = 0;
  } else if ((j - jth) <= 0 && (i + ith) <= (j + jth)) {
    ranges[i] = 0;
  } else if (ith === jth) {
    return;
  } else if (ith > jth) {
    if ((ith + i) >= (jth + j)) {
      ranges[j] = 0;
    }
  } else if (jth > ith) {
    if ((j - jth) <= (i - ith)) {
      ranges[i] = 0;
    }
  }
}

function completeCover(ranges) {
  let water = new Array(ranges.length).fill(0);

  for (let i = 0; i < ranges.length; i++) {
    let tap = ranges[i];
    if (tap > 0) {
      for (let j = i - tap; j <= i + tap; j++) {
        if (j >= 0 && j < ranges.length) {
          water[j] = 1;
        }
      }
    }
  }

  for (let location of water) {
    if (location === 0) {
      return false;
    }
  }

  return true;
}



// console.log("EXPECT 1  ", minTaps(5, [3,4,1,1,0,0]));
// console.log("EXPECT -1 ", minTaps(3, [0,0,0,0]));
// console.log("EXPECT 3  ", minTaps(7, [1,2,1,0,2,1,0,1]));
// console.log("EXPECT 2  ", minTaps(8, [4,0,0,0,0,0,0,0,4]));
// console.log("EXPECT 1  ", minTaps(8, [4,0,0,0,4,0,0,0,4]));
console.log("EXPECT 2  ", minTaps(9, [0,5,0,3,3,3,1,4,0,4]));

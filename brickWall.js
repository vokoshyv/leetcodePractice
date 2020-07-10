/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  let counts = {};

  let width = parseInt(wall[0].reduce((item, accumulator) => {
    accumulator += item;
    return accumulator;
  }, 0));

  let height = parseInt(wall.length);

  for (let layer of wall) {
    let width = 0;
    for (let brick of layer) {
      width += brick;
      if (width in counts) {
        counts[width]++;
      } else {
        counts[width] = 1;
      }
    }
  }

  let result = Infinity;

  console.log(counts);

  for (let count in counts) {
    if (parseInt(count) !== width) {
      result = Math.min(result, height - counts[count]);
    }
  }

  return (result !== Infinity) ? result : height;
};

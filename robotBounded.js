/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let directions = {
    "N": [0, -1],
    "S": [0, 1],
    "E": [1, 0],
    "W": [-1, 0]
  }

  let rightTransform = {
    "N": "E",
    "S": "W",
    "E": "S",
    "W": "N"
  }

  let leftTransform = {
    "N": "W",
    "S": "E",
    "E": "N",
    "W": "S"
  }

  let current = "N";

  let x = 0;
  let y = 0;

  function command(char) {
    if (char === 'G') {
      x += directions[current][0];
      y += directions[current][1];
    } else if (char === 'R') {
      current = rightTransform[current];
    } else if (char === 'L') {
      current = leftTransform[current];
    }
  }

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < instructions.length; j++) {
      command(instructions[j]);
    }
  }

  return x === 0 && y === 0 && current === "N";
};
console.log(isRobotBounded("GL"));

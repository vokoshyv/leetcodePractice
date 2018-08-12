/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {

  function findDistanceToTarget(startX, startY, targetX, targetY) {
    return Math.abs(startX - targetX) + Math.abs(startY - targetY);
  }

  let myDistance = findDistanceToTarget(0, 0, target[0], target[1]);

  return ghosts.map(ghost => findDistanceToTarget(ghost[0], ghost[1], target[0], target[1]))
  .reduce((result, distance) => result && distance > myDistance, true);

};

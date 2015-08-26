/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var firstRecArea = (C-A)*(D-B);
  var secondRecArea = (G-E)*(H-F);
  var overlap = Math.max(0, (Math.min(C, G) - Math.max(A, E))) * Math.max(0, (Math.min(D, H) - Math.max(B, F)));
  return firstRecArea + secondRecArea - overlap;
};
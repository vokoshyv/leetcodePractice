/**
 * @param {number[][]} grid
 * @return {number}
 */

/*

- For every island, do a DFS through it to arrive at the area
- Also give each cell of that island an ID (could just be numerical) 
- Next, travel through all the 0s
    - If there are 0 cells where there are two (or more) different IDs around 
      it, find the maximum area possible at these locations
    - If there are 0 cells where all the surroundings are the same ID, then the 
      togglling of the 0 cell will only add 1 to the possible area (at this 
      toggled location) 
- Once you have the max area that can be created from the toggling of one of 
  these 0s, return that. 
- If there was nothing to be toggled, then we just return the area of the entire 
  binary grid 


*/


var largestIsland = function(grid) {
    
};
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


var largestIsland = function (grid) {
    const visited = new Set();
    const idMap = new Map();
    const areaMap = new Map();
    const zerosCoord = [];

    const stack = [];
    let id = 0;

    const dfs = (x, y) => {
        let key = `${x}_${y}`;
        if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length) {
            return 0;
        }
        if (visited.has(key)) {
            return 0;
        }
        if (grid[y][x] === 0) {
            return 0;
        }

        stack.push(key);
        visited.add(key);

        let right = dfs(x + 1, y);
        let left = dfs(x - 1, y);
        let down = dfs(x, y + 1);
        let up = dfs(x, y - 1);

        return right + left + down + up + 1;
    }

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            let current = `${x}_${y}`;
            if (!visited.has(current) && grid[y][x] === 1) {
                let area = dfs(x, y);

                while (stack.length > 0) {
                    let key = stack.pop();
                    areaMap.set(key, area);
                    idMap.set(key, id);
                }
                id++;
            } else if (grid[y][x] === 0) {
                zerosCoord.push([x, y]);
            }
        }
    }

    // console.log("ID MAP: ", idMap);
    // console.log("AREA MAP: ", areaMap);
    // console.log("ZEROS COORD: ", zerosCoord);

    // We now want to loop through all of the zero coordinates
    // Check up, down, left, and right
    // For each unique ID, get their corresponding areas
    // If there exist two or more, find the two largest
    // Add them together and add 1
    // Change some result variable if it's greater than prior result

    if (zerosCoord.length === 0) {
        return grid.length * grid[0].length;
    }

    let result = 0;

    for (let coord of zerosCoord) {
        let [x, y] = coord;
    
        let rightKey = `${x+1}_${y}`;
        let leftKey = `${x-1}_${y}`;
        let downKey = `${x}_${y+1}`;
        let upKey = `${x}_${y-1}`;

        const compare = new Map();

        if (idMap.has(rightKey)) {
            compare.set(idMap.get(rightKey), areaMap.get(rightKey));
        }
        if (idMap.has(leftKey)) {
            compare.set(idMap.get(leftKey), areaMap.get(leftKey));
        }
        if (idMap.has(downKey)) {
            compare.set(idMap.get(downKey), areaMap.get(downKey));
        }
        if (idMap.has(upKey)) {
            compare.set(idMap.get(upKey), areaMap.get(upKey));
        }

        // compare map is empty
        // compare map has one element
        // compare map has two or more elements

        if (compare.size === 0) {
            result = Math.max(result, 1);
        } else if (compare.size === 1) {
            // console.log("HERE!");
            result = Math.max(result, compare.get(compare.keys().next().value) + 1);
        } else if (compare.size >= 2) {
            let areas = [];
            let totalArea = 0;
            compare.forEach((value, key) => {
                totalArea += value;
            })

            result = Math.max(result, totalArea + 1);
        }
    }

    return result;
};
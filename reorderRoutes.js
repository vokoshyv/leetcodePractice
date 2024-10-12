/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

class Graph {
    constructor(n, connections) {
        this.edges = new Map();

        for (let connection of connections) {
            let cityA = connection[0];
            let cityB = connection[1];

            if (this.edges.has(cityA)) {
                let edges = this.edges.get(cityA);
                edges.push(cityB);
                this.edges.set(cityA, edges);
            } else {
                this.edges.set(cityA, [cityB]);
            }

            if (this.edges.has(cityB)) {
                let edges = this.edges.get(cityB);
                edges.push(cityA);
                this.edges.set(cityB, edges);
            } else {
                this.edges.set(cityB, [cityA]);
            }
        }
    }

    getEdges(city) {
        return this.edges.get(city);
    }
}


var minReorder = function(n, connections) {
    const existingRoads = new Set();

    for (let connection of connections) {
        existingRoads.add(`${connection[0]}_${connection[1]}`);
    }

    let graph = new Graph(n, connections);

    // console.log("GRAPH: ", graph);

    // now perform BFS and for any traversals that are not pointing inwards 
    // towards city 0, we increment a counter
    // return the conter 

    let counter = 0;
    let current, edges;
    let queue = [];
    let visited = new Set();

    queue.push(0);
    visited.add(0);

    while (queue.length > 0) {
        current = queue.shift();
        edges = graph.getEdges(current);

        for (let edge of edges) {
            if (!visited.has(edge)) {
                queue.push(edge);
                visited.add(edge);
                if (existingRoads.has(`${current}_${edge}`)) {
                    counter++;
                }
            }
        }
    }


    return counter;
};

// console.log(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]]));
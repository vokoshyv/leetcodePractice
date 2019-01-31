/**
 * @param {number[][]} envelopes
 * @return {number}
 */

class Graph {
  constructor() {
    this.storage = new Map();
  }

  insertNodes(envelope) {
    this.storage.set(envelope, []);
  }
}


var maxEnvelopes = function(envelopes) {
  let graph = new Graph();

  for (let i = 0; i < envelopes.length; i++) {
    graph.insertNodes(envelopes[i]);
  }

  console.log(graph);
};

// [width, height]
console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));



// => [ [ 2, 3 ], [ 5, 4 ], [ 6, 4 ], [ 6, 7 ] ]


// house robber approach <- dead
// =>      [[2,3],[5,4],[6,15],[7,6],[8,7],[9,8],[10,9]]

// result = [  1 ,  2  ,  3   ,  3  ,   ]


// sliding window - not as useful
//            L              R
// =>      [[2,3],[5,4],[6,15],[7,6],[8,7],[9,8],[10,9]]


// two pointer apraoch from opposite ends of the array
//
//                  L                        R
// =>      [[2,3],[5,4],[6,15],[7,6],[8,7],[9,8],[10,9]]

// count = 2
// count = 2

let test = [[0,0,0,0],
            [1,0,1,0],
            [1,0,0,0],
            [1,0,1,1],
            [1,0,0,0]];


class Vertex {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

function shortestPath(matrix, startX, startY, endX, endY){
  let visited = {};

  let queue = [];
  let vertex = new Vertex(startX, startY);
  queue.push([vertex, [startX + '_' + startY]]);
  visited[startX + '_' + startY] = true;

  // console.log(visited);
  // console.log(queue);

  let current;

  while (queue.length > 0){
    // console.log("QUEUE: ", queue);

    current = queue.shift();
    // console.log("CURRENT: ", current);
    vertex = current[0];

    if (vertex.x === endX && vertex.y === endY){
      return current[1];
    }

    if (vertex.y + 1 < matrix.length && matrix[vertex.y + 1][vertex.x] === 0 && visited[vertex.x + '_' + (vertex.y + 1)] === undefined){
      current[1].push(vertex.x + '_' + (vertex.y + 1));
      queue.push([new Vertex(vertex.x, vertex.y + 1), current[1].slice()])
      visited[vertex.x + '_' + (vertex.y + 1)] = true;
    }

    if (vertex.y - 1 >= 0 && matrix[vertex.y - 1][vertex.x] === 0 && visited[vertex.x + '_' + (vertex.y - 1)] === undefined){
      current[1].push(vertex.x + '_' + (vertex.y - 1));
      queue.push([new Vertex(vertex.x, vertex.y - 1), current[1].slice()])
      visited[vertex.x + '_' + (vertex.y - 1)] = true;
    }

    if (vertex.x + 1 < matrix[0].length && matrix[vertex.y][vertex.x + 1] === 0 && visited[(vertex.x + 1) + '_' + vertex.y] === undefined){
      current[1].push((vertex.x + 1) + '_' + vertex.y);
      queue.push([new Vertex(vertex.x + 1, vertex.y), current[1].slice()])
      visited[(vertex.x + 1) + '_' + vertex.y] = true;
    }

    if (vertex.x - 1 >= 0 && matrix[vertex.y][vertex.x - 1] === 0 && visited[(vertex.x - 1) + '_' + vertex.y] === undefined){
      current[1].push((vertex.x - 1) + '_' + vertex.y);
      queue.push([new Vertex(vertex.x - 1, vertex.y), current[1].slice()])
      visited[(vertex.x - 1) + '_' + vertex.y] = true;
    }

    // console.log(visited);

  }


}

console.log(shortestPath(test, 0, 0, 3, 4));

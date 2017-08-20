process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function buyMaximumProducts(n, k, a) {
  let result = new Array(102).fill(0);
  for (let i = 0; i < n; i++){
    result[a[i]] += (i + 1);
  }
  let total = 0;

  let quantity;
  let cost;

  for (let i = 0; i < result.length; i++){
    cost = i;
    quantity = result[i];

    if (k >= (cost * quantity)){
      total += quantity;
      k -= (cost * quantity);
      continue;
    }

    while (quantity > 0 && k >= cost){
      k -= cost;
      quantity -= 1;
      total += 1;
    }
    if (k < cost){
      return total;
    }
  }

  return total;

}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var k = parseInt(readLine());
    var result = buyMaximumProducts(n, k, arr);
    process.stdout.write("" + result + "\n");

}

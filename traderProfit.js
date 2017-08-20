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

function traderProfit(k, n, A) {
  let currentMin = A[0];
  let localMax = A[0];
  let profit = 0;

  for (let i = 1; i < n; i++){
    if (k === 1 && localMax !== currentMin){
      localMax = Math.max(localMax, A[i]);
    } else if (A[i] < A[i - 1] && k > 0){
      profit += Math.max(0, (localMax - currentMin));
      if (localMax !== currentMin){
        k--;
      }
      currentMin = A[i];
      localMax = A[i];
    } else {
      localMax = A[i];
    }
  }

  profit += Math.max(0, (localMax - currentMin));
  return profit;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var k = parseInt(readLine());
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = traderProfit(k, n, arr);
        process.stdout.write("" + result + "\n");
    }

}

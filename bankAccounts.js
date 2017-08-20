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

function feeOrUpfront(n, k, x, d, p) {
  let fee = 0;
  for (let i = 0; i < n; i++){
    fee += Math.max(k, x / 100 * p[i]);
  }
  if (fee < d){
    return 'fee';
  } else if (d < fee){
    return 'upfront';
  } else {
    return 'fee';
  }
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        var x = parseInt(n_temp[2]);
        var d = parseInt(n_temp[3]);
        p = readLine().split(' ');
        p = p.map(Number);
        var result = feeOrUpfront(n, k, x, d, p);
        process.stdout.write("" + result + "\n");
    }

}

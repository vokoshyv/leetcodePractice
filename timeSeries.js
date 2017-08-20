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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var q = parseInt(n_temp[1]);
    t = readLine().split(' ');
    t = t.map(Number);
    p = readLine().split(' ');
    p = p.map(Number);

    console.log("TIME :", t);
    console.log("PRICES: ", p);

    for(var a0 = 0; a0 < q; a0++){
        var _type_temp = readLine().split(' ');
        var _type = parseInt(_type_temp[0]);
        var v = parseInt(_type_temp[1]);
    }


}

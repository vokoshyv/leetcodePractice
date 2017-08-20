function processData(input) {
  input = input.split('\n');

  let arr = input[1].split(' ').map((item)=>{return Number(item)});
  let pivot = arr[0];

  let before = [];
  let equal = [];
  let after = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > pivot){
      after.push(arr[i]);
    } else if (arr[i] < pivot){
      before.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  let result = before.concat(equal).concat(after);
  console.log(result.join(' '));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

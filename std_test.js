process.stdin.on("data", (data) => {
  console.log(data.toString());

  multiply(parseInt(data.toString()));

})

let i = 1;


function multiply(n) {
  console.log("I was: ", i);
  i = i * n;
  console.log("I is now: ", i);
}

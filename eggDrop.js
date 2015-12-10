// given two eggs and a building that is 100 stories tall,
// what is the fewest number of steps to find how high an 
// egg can be dropped safely from?

// 





var eggDrop = function(safeHeight){

}







































// max number of egg drops necessary to find worse-case
// scenario is 19 drops for a safe height of 99 stories
var eggDropTens = function(safe){
  var counter = 0;
  var height = 0;

  while (height <= safe){
    height += 10;
    counter++;
  }
  if (height === 110){
    return 10;
  }
  
  height -= 9;
  
  while (height <= safe+1){
    counter++;
    height += 1;
  }
  
  return ((safe+1) % 10 === 0)? counter-1 : counter;
}




var eggDropEff = function(safe){
  var counter = 0;
  var steps = 15;
  var height = 0;

  while (height <= safe){
    height += steps; 
    counter++;
    steps--;
  }
  
  steps++;
  height -= (steps-1);

  while (height <= safe+1){
    counter++;
    height += 1;
  }

//   console.log("COUNTER: ", counter);
//   console.log("HEIGHT: ", height);
//   console.log("steps: ", steps);

  return (height === safe-1)? counter-1 : counter;
}


for (var i = 0; i < 101; i++){
  console.log("Safe Height: ", i, "Attempts Necessary: ", eggDropEff(i));
}
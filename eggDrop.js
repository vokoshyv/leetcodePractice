// given two eggs and a building that is 100 stories tall,
// what is the fewest number of steps to find how high an 
// egg can be dropped safely from?

// 





var eggDrop = function(safeHeight){

}








































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
  
}
// [1, 2, 3, 4, 5];

var mixUp = function(input){
  for (var i = 0; i < input.length; i++){
    var switchIndex = Math.floor(Math.random() * input.length);
    var temp = input[switchIndex];
    input[switchIndex] = input[i];
    input[i] = temp;
  }
  return input;
}

var fishYates = function(input){
  var i = input.length; 
  while (i--){
    var switchIndex = Math.floor(Math.random() * (i+1));
    var temp = input[switchIndex];
    input[switchIndex] = input[i];
    input[i] = temp;
  }
  return input;
}

var runMany = function(){
  var i = 1000000; 
  
  var lib = {
    1: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    }, 
    2: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    },
    3: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    },
    4: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    },
    5: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    }
  };

  while (i--){
    var work = fishYates([1, 2, 3, 4, 5]);
    for (var j = 0; j < work.length; j++){
      lib[work[j]][j]++;
    }
  }
  console.log(lib);
}

runMany();
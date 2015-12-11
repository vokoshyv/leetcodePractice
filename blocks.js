var Blocks = function(){
  this.storage = [];
}

Blocks.prototype.init = function(size){
  for (var i = 0; i < size; i++){
    this.storage.push([i]);
  }
}

Blocks.prototype.move = function(a, b){
  if (a === b){
    console.log('a is equal to b');
    return;
  }

  var aAdd;
  var bAdd;

  this.storage.forEach(function(inArr){
    if (!aAdd){
      aAdd = inArr.indexOf(a) > -1 ? inArr : undefined;
    }

    if (!bAdd){
      bAdd = inArr.indexOf(b) > -1 ? inArr : undefined;
    }
  })
  // a and b info found;

  if (aAdd === bAdd){
    console.log('a in same stack as b');
    return;
  }

  while (aAdd[aAdd.length - 1] !== a){
    var temp = aAdd.pop();
    this.storage[temp].push(temp);
  }

  while (bAdd[bAdd.length - 1] !== b){
    var temp = bAdd.pop();
    this.storage[temp].push(temp);
  }

  bAdd.push(aAdd.pop());

}


var test = new Blocks();

// test.init(8);


// test.move(7, 1);
// test.move(5, 1);
// test.move(1, 6);
// test.move(4, 3);
// test.move(1, 4);
// test.move(3, 1);
// test.move(5, 2);
// test.move(7, 5);
// test.move(4, 5);


var parser = function(work, text){
  if (/^\d+$/.test(text)){
    work.init(parseInt(text, 10));
  } else if (text.slice(0, 4) === 'move'){
    text = text.split(' ');
    var a = parseInt(text[1], 10);
    var b = parseInt(text[3], 10);
    work.move(a, b);
  } else {
    work.storage.forEach(function(inArr, index){
      if (inArr.length === 0){
        console.log(index + ':');
      } else {
        var key = index + ': ';
        var value = inArr.join(' ');
        console.log(key + value);
      }
    })
  }
}

parser(test, '8');
parser(test, 'move 7 onto 1');

parser(test, 'move 5 onto 1');
parser(test, 'move 1 onto 6');
parser(test, 'move 4 onto 3');
parser(test, 'move 1 onto 4');
parser(test, 'move 3 onto 1');
parser(test, 'move 5 onto 2');
parser(test, 'move 7 onto 5');
parser(test, 'move 4 onto 5');
parser(test, 'quit');


// console.log(test.storage);

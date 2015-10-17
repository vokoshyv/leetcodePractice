// triple bit coding challenge

// gameplan: find all possible groupings of numbers split up, 
// then perform all different operations on them. 
// for the ones that work, insert the string expression into
// a results array. 


var findPossibleExpressions = function(numbers, target){
  numbers += 'a';
  var possible = [];

  // recursive function that gives possible combinations
  // to pull from
  var createPossible = function(builtUp, pullFrom){
    if (pullFrom.length === 1){
      possible.push(builtUp.slice());
      return;
    }

    for (var i = 1; i < pullFrom.length; i++){
      var temp1 = pullFrom.slice(0, i);
      var temp2 = pullFrom.slice(i);
      builtUp.push(temp1);
      createPossible(builtUp, temp2);
      builtUp.pop();
    }
  }
  createPossible([], numbers);
  console.log(possible);
  
  var results = [];
  
  // recurse function for testing each possible comination of numbers
  // with the different mathematical operators (+,-,*,/)
  var testExpressions = function(numbers, target){
    var recurse = function(total, index, phrase){
      if (index === numbers.length){
        // if (total === target){
          // this if statement inserts phrases that into the
          // results array that do not follow order of operations
          // but are evaluated from left to right
        if (evaluateExpression(phrase) === target){
          // this if statement inserts phrases that actually
          // equal the target argument
          results.push(phrase);
        }
        return;
      }

      recurse(total + Number(numbers[index]), index + 1, phrase + "+" + numbers[index]);
      recurse(total - Number(numbers[index]), index + 1, phrase + "-" + numbers[index]);
      recurse(total / Number(numbers[index]), index + 1, phrase + "/" + numbers[index]);
      recurse(total * Number(numbers[index]), index + 1, phrase + "*" + numbers[index]);

    }
    recurse(Number(numbers[0]), 1, numbers[0]);
  }

  for (var i = 0; i < possible.length; i++){
    testExpressions(possible[i], target);
  }

  console.log("RESULTS: ", results);
  return results;
}

// findPossibleExpressions("1234", 5);

// evaluteExpression is used for evaluating mathematical expressions
// that are currently strings
// var evaluateExpression = function(input){
//   var work = input.split('*');
//   var work2 = [];
//   for (var i = 0; i + work.length; i++){
//     work2.push
//   }
// }

// let it be noted that this evaluateExpression function does not
// follow order of operations as well 

// upon getting this to work, the problems will be properly evaluated
function evaluateExpression(expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }

    return expr;
}

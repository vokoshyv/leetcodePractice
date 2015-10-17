 /********************************************************************** 
  *                          Homework II                               *
  *                                                                    *
  *  Prompt: Given a set S, return the power set P(S), which is        *
  *          a set of all subsets of S.                                *
  *                                                                    *
  *  Input:  A String                                                  *
  *  Output: An Array with the power set of the input string           *
  *                                                                    *
  *  Example: S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']*                                                               *
  *                                                                    *
  *  Note: There should not be any duplicates in the power set         *
  *        ('ab' and 'ba' are considered the same), and it will always *
  *        begin with an empty string ('')                             *
  *                                                                    *
  **********************************************************************/
 


var powerSet = function(str){

}






























// ************************************************ //

var powerSet = function(str){
  var result = [];

  var recurse = function(current, depth){
    if (depth === str.length){
      result.push(current);
      return;
    }

    recurse(current, depth + 1);
    recurse(current + str[depth], depth + 1);
  }

  recurse("", 0)
  console.log(result);
  return result;
}

// ************************************************ //

powerSet('abc');
































// ************************************************ //

var powerSetDup = function(str){
  var result = [];
  var lib = {};

  var recurse = function(current, depth){
    if (depth === str.length){
      if (lib[current] === undefined){
        lib[current] = true;
        result.push(current);
      } 
      return;
    }

    recurse(current, depth + 1);
    recurse(current + str[depth], depth + 1);
  }

  recurse("", 0)
  console.log(result);
  return result;
}

// ************************************************ //

// powerSetDup('aab');
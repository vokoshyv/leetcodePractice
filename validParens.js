/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var lib = {
    '(': ')', 
    '{': '}', 
    '[': ']'
  };

  for (var i = 0; i < s.length; i++){
    if ('{[('.indexOf(s[i]) > -1){
      stack.push(s[i]);
    }else if (']})'.indexOf(s[i]) > -1){
      if (lib[stack.pop()] !== s[i]){
        return false;
      }
    }
  } 
  return (stack.length === 0)? true : false;
};

var isValid = function(s){
  var stack = [];
  var lib = {
    '(': ')', 
    '{': '}', 
    '[': ']'
  };

  for (var i = 0; i < s.length; i++){
    s[i] === '{' && stack.push(s[i]);
    s[i] === '[' && stack.push(s[i]);
    s[i] === '(' && stack.push(s[i]);
    if (s[i] === ')'){
      if (lib[stack.pop()] !== ')'){return false};
    }else if (s[i] === '}'){
      if (lib[stack.pop()] !== '}'){return false};
    }else if (s[i] === ']'){
      if (lib[stack.pop()] !== ']'){return false};
    }
  }

  return (stack.length === 0)? true : false;
}
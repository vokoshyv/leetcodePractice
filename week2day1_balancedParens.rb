
# Example:
#   balancedParens('(');  // false
#   balancedParens('()'); // true
#   balancedParens(')(');  // false
#   balancedParens('(())');  // true
#
# Example:
#  balancedParens('[](){}'); // true
#  balancedParens('[({})]');   // true
#  balancedParens('[(]{)}'); // false

# Example: 
# balancedParens(' toot  = { 1395861439587: how? are you() }'); // true
# balancedParens(' def great() { telescopes.awesome();'); // false































def balancedParens(work)
  check = []
  work = work.split('')
  
  forward_lib = {
    '(' => true, 
    '{' => true,  
    '[' => true 
  }
  back_lib = {
    ')' => '(', 
    ']' => '[', 
    '}' => '{'
  }


  work.each do |element|

    if forward_lib[element] != nil
      check.push(element)
    
    elsif back_lib[element] != nil
      if check.pop != back_lib[element]
        return false
      end
    end

  end
  
  if check.length > 0
    return false
  end
  
  return true
end

balancedParens(' toot  = { 1395861439587: how? are you() }')
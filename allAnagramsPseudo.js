fn allAnagrams(input){
  results = []

  fn buildCombos(buildUp, pullFrom){
    if (pullFrom.length === 0){
      results.push(buildUp)
      return
    }

    for loop through pullFrom{
      temp = pullFrom[index]
      delete temp from pullFrom
      buildCombos(buildUp + temp, pullFrom)
      insert temp back into pullFrom
    }
  }

  buildCombos('', input);

  return results
}
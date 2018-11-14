/**

"Howdy Billy,\n" +
"I am going to take cs6300 and cs6400 next semester.\n" +
"Did you take cs 6300 last semester? I want to\n" +
"take 2 courses so that I will graduate Asap!";

expected outcome is:

"dy BIlly,HOw\n" +
"m gOIng tO tAkE cs6300 And cs6400 nExt sEmEstEr.i A\n" +
" yOU tAkE cs 6300 lAst sEmEstEr? i wAnt tODId\n" +
"E 2 cOUrsEs sO thAt i wIll grAdUAtE asAp!tAk"

**/

function modifyChar(char) {
  if ("aeiou".indexOf(char) > -1) {
    return char.toUpperCase();
  } else if ("AEIOU".indexOf(char) > -1) {
    return char.toLowerCase();
  } else {
    return char;
  }
}

function modifyChars(str) {
  return str.split('').map((char) => {
    return modifyChar(char);
  }).join('');
}

function rotateThree(str) {
  str = str.split('\n')[0];
  str = str + str.slice(0, 3);
  str = str.slice(3);
  // MAKE NOTE OF WHAT I'M ADDING IN THE LINE BELOW!!
  str += '\\n';
  return str;
}



console.log(modifyChars(rotateThree("Howdy Billy,\n")));
console.log(modifyChars(rotateThree("I am going to take cs6300 and cs6400 next semester.\n")));
console.log(modifyChars(rotateThree("Did you take cs 6300 last semester? I want to\n")));
console.log(modifyChars(rotateThree("take 2 courses so that I will graduate Asap!")));

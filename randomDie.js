// I got this problem at an interview today:
//
// # /*
// # Part 1: Assume you have access to randomness via rand(). Write a function unbiasedDie(n) that takes an integer n>1 and returns, with equal probability, a number from 1 to n, inclusive. So calling unbiasedDie(6) simulates rolling a standard 6-sided die.
// #
// # Part 2: Now create another function, biasedDie(n), that takes the same input and gives the same output, but biased against giving the maximum value, in a specific way: the probability of rolling N must be 1/10th the probability of rolling any given other number.  So P(1) = P(2) = P(3) ... = 10*P(N).
// # */

function unbiasedDie(n) {
  return Math.floor(Math.random() * n) + 1;
}

function biasedDie(n) {
  return Math.floor(Math.random() * (n - 0.9) + 1);
}


function test(n, trials) {
  let i = trials;
  let unbiasedLib = new Map();
  let biasedLib = new Map();

  for (let i = 1; i < n+1; i++) {
    unbiasedLib.set(i, 0);
    biasedLib.set(i, 0);
  }

  while (i--) {
    let unbiasedResult = unbiasedDie(n);
    unbiasedLib.set(unbiasedResult, unbiasedLib.get(unbiasedResult) + 1);

    let biasedResult = biasedDie(n);
    biasedLib.set(biasedResult, biasedLib.get(biasedResult) + 1);
  }


  console.log(`UNBIASED DIE RESULTS WITH N = ${n}; ${trials} TRIALS`)
  console.log(unbiasedLib)
  console.log('');
  
  console.log(`BIASED DIE RESULTS WITH N = ${n}; ${trials} TRIALS`)
  console.log(biasedLib)

}


test(4, 1000000);

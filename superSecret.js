/*
let str = '';

let lib = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < 10000; i++) {
  str += lib[Math.floor(Math.random() * 26)];
}

console.log(str);

let result = [];

for (let i = 0; i < str.length; i++) {
  if (Math.random() < 0.25) {
    result.push(str[i]);
  }
}

let i = result.length;

while (i--) {
  let randIndex = Math.floor(Math.random() * (i+1));
  [result[i], result[randIndex]] = [result[randIndex], result[i]];
}

console.log(result.join(''));

*/

let work = [];

for (let i = 0; i < 10000; i++) {
  work.push(Math.round(Math.random()));
}

console.log(work.join('\n'));
console.log('*******************************')
console.log('*******************************')
console.log('*******************************')
console.log('*******************************')
console.log('*******************************')
console.log('*******************************')
console.log('*******************************')
console.log(work.sort().join('\n'));

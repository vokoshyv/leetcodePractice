var blah = "10 1 1.9 9 6.1 8 5.8 5 4.8 10 4.3 1 3.7 8 6.7 5 10.10 10 1.9 7 10.6 9 5.1 8 2.2 1 1.4 7 6.4 4 1.5 7 10.3 2 1.5 3 6.9 1 1.6 2 10.5 7 7.7 5 10.5 3 1.10 3 8.7 8 1.10 1 7.9 7 2.10 6 3.8 5 1.10 4 2"

var work = blah.split('.');

work = work.map(function(value){
  return value.split(' ');
})

var final = [];

work.map(function(value){
  final.push({
    offset: Number(value[0]),
    width: Number(value[1]), 
    height: Number(value[2])
  })
})

console.log(final);
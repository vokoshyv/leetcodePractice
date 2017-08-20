

/*
let time = [1, 2, 4, 8, 10]
let prices = [5, 3, 12, 1, 10]
1 10
1 4
2 8
2 3
1 13

*/


let times = [1, 2, 4, 8, 10];
let prices = [5, 3, 12, 1, 10];



class TimeSeries {

  constructor(times, prices){
    this.sortedByTime;
    this.sortedByPrice;

    this.sortedByTime = times.map((time, i)=>{
      return {
        time: time,
        price: prices[i]
      }
    }).sort((a, b)=>{return a.time - b.time})

    this.sortedByPrice = prices.map((price, i)=>{
      return {
        price: price,
        time: times[i]
      }
    }).sort((a, b)=>{return a.price - b.price})

    // console.log(this.sortedByTime);
    console.log(this.sortedByPrice);

    // Type 1 stuff
    this.minTimeStack = [];
    this.minTimeHash = {};

    let i = this.sortedByPrice.length;
    i--;
    this.minTimeStack.push(this.sortedByPrice[i].time);
    this.minTimeHash[this.sortedByPrice[i].price] = this.minTimeStack.length - 1;
    while (i--){
      this.minTimeStack.push(Math.min(this.minTimeStack[this.minTimeStack.length - 1], this.sortedByPrice[i].time));
      this.minTimeHash[this.sortedByPrice[i].price] = this.minTimeStack.length - 1;
    }

    // console.log(this.minTimeStack);
    // console.log(this.minTimeHash);


    // Type 2 stuff
    this.maxPriceStack = [];
    this.maxPriceHash = {};

    i = this.sortedByTime.length;
    i--;
    this.maxPriceStack.push(this.sortedByTime[i].price);
    this.maxPriceHash[this.sortedByTime[i].time] = this.maxPriceStack.length - 1;
    while (i--){
      this.maxPriceStack.push(Math.max(this.maxPriceStack[this.maxPriceStack.length - 1], this.sortedByTime[i].price));
      this.maxPriceHash[this.sortedByTime[i].time] = this.maxPriceStack.length - 1;
    }

    // console.log(this.maxPriceStack);
    // console.log(this.maxPriceHash);
  }

  findSol(type, v){
    if (type === 1){
      return this.calculateTypeOne(v);
    } else {
      return this.calculateType(v);
    }
  }

  calculateTypeOne(v){
    return this.minTimeStack[this.minTimeHash[v]];
  }

  binarySearchUpOne(v){
    let left = 0;
    let right = this.sortedByPrice.length - 1;

    while (left < right - 1){
      if ()  
    }
    return this.sortedByPrice[right].price;
  }


  calculateTypeTwo(v){
    return this.maxPriceStack[this.maxPriceHash[v]];
  }

  binarySearchUpTwo(v){

  }

  // binarySearchDown(v){
  //   let left = 0;
  //   let right = this.sortedByPrice.length - 1;
  // }




}




let test = new TimeSeries(times, prices);



// console.log(test.findSol(1, 10));
// console.log(test.findSol(1, 4));

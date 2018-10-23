function createPromises() {
  let arr = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    resolve(arr);
  })
}

function promisifyArray(arr) {
  return arr.map((item) => {
    return function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item);
          console.log(item);
          resolve(item);
        }, 1000);
      });
    }
  });
}

function runSequentially(promises) {
  return promises.reduce((promiseChain, currentPromise) => {
    return promiseChain.then((chainResults) => {
      currentPromise.then((currentResult) => {
        // [ ...chainResults, currentResult ];
      });
    });
  }, Promise.resolve([])).then((arrOfResults) => {
    console.log(arrOfResults);
  });
}

let queue = require('queue');

let q = queue({
  concurrency: 1
});

createPromises().then((arr) => {
  return promisifyArray(arr);
}).then((promises) => {
  promises.forEach((promise) => {
    q.push(promise);
  });
  q.start();
})

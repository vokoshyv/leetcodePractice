/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let results = [];
  let pool = new Set([1,2,3,4,5,6,7,8,9]);

  function create(pool, build, total){
    console.log(build);
    if (total === n){
      results.push(build.slice());
      return;
    } else if (total > n){
      return;
    } else if (build.length > k){
      return;
    }

    for (let item of pool){
      pool.delete(item);
      create(pool, build.concat(item), total + item);
      pool.add(item);
    }
  }
  create(pool, [], 0);

  return results;
};




console.log(combinationSum3(3, 8));

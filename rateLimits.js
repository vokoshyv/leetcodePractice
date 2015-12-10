// SINGLE-THREADED API DATA MINING


// given an API address of www.api.com/:ID, how can you most
// quickly get a list of JSON objects with IDs 1-100 when
// there is a rate limit of 4 requests per second? 

// To get a single JSON object for ID 5, you would use the 
// request module as follows: 

// request('www.api.com/5', function(response, error){
//   console.log(response);
// })














































var acquireJSON = function(){
  var results = [];
  var errored = [];

  var runWith = [1, 2, 3, 4];

  var run = setInterval(mine, 1000);

  var mine = function(){
    runWith[0] += 4;
    runWith[1] += 4;
    runWith[2] += 4;
    runWith[3] += 4;

    for (var i = 0; i < 4; i++){
      request('www.api.com/' + runWith[i], function(response, error){
        if (error){
          errored.push(response.ID);
          return;
        } 

        results.push(response.body);
      })
    }
    if (runWith[0] > 100){
      clearInterval(run);
    }
  }

  mine(); 
  
}
function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  let timeout = 1000
  let promise = new Promise((resolve,reject)=>{
      if(timeLeft >= timeout){
        setTimeout(() =>{
          resolve(timeLeft-timeout)
          console.log(`done streching`)
        }
        ,timeout)
      }else{
        reject('error: you dont have enough time to stretch')
      }
  })
  return promise
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  let timeout = 500
  let promise = new Promise((resolve,reject)=>{
      if(timeLeft >= timeout){
        setTimeout(() =>{
          resolve(timeLeft-timeout)
          console.log(`done streching`)
        }
        ,timeout)
      }else{
        reject('error: you dont have enough time to run on treadmill')
      }
  })
  return promise
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  let timeout = 2000
  let promise = new Promise((resolve,reject)=>{
      if(timeLeft >= timeout){
        setTimeout(() =>{
          resolve(timeLeft-timeout)
          console.log(`done streching`)
        }
        ,timeout)
      }else{
        reject('error: you dont have enough time to weight lift')
      }
  })
  return promise
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
 stretch(totalTime)
 .then(timeLeft => runOnTreadmill(timeLeft))
 .then(timeLeft => liftWeights(timeLeft))
 .then(timeLeft=> console.log(`done working out with ${timeLeft/1000} seconds left`))
 .catch(error => console.log(error))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


 workout(1000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left

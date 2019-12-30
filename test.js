let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    reject(125);
    resolve(123); // immediately give the result: 123
    console.log('still runnig');
    
  });

promise.then((value) => console.log(value + ' worked'), (reject)=>console.log(reject + ' error'));
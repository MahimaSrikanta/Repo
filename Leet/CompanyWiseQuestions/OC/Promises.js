function storage() {
    return new Promise((resolve, reject) => {
      resolve("hello");
    });
  }
  
  function rej() {
    return new Promise((resolve, reject) => {
      reject('rejected');
    })
  }
  
  //example 2
  storage()
    .then(value => {
      console.log("hello")
     return rej()
    })
    .then(v => {
      console.log("hi");
      return storage();
    })
    .catch(err => console.log(err));
  
  //example3
  
  new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .then(value => console.log("Handler 2", value))
    .catch(reason => {
      console.log("Caught failure " + reason);
      return "nothing";
    })
  
  //example4
  let  promisegen = (time) => {
    return new Promise(resolve => {
      setTimeout(function(){
        resolve(time)
      }, time)
    });
  }
  let PromiseArray = [promisegen(1000), promisegen(2000), promisegen(1000)]
   Promise.all(PromiseArray)
   .then(data => console.log(data))
   .catch(err => console.log("reject"));
  
  
   //example6
   Promise.all([
      Promise.resolve(1),
      Promise.reject(0),
      Promise.resolve(0)
  ])
  .then(() => { console.log('resolved!'); })
  .catch(() => { console.log('failedddd!') });
  
   //example7
   //Implement Pomise.all 
   
   var promiseAll = function(promises) {
    var results = [];
    var completedPromises = 0;
    return new Promise(function (resolve, reject) {
      promises.forEach(function(promise, index) {
        promise.then(function (value) {
          results[index] = value;
          completedPromises += 1;
          if(completedPromises === promises.length) {
            resolve(results);
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    });
  }
  
  //example8
  Promise.all([
    Promise.resolve("1"),
    Promise.resolve(2),
    Promise.reject(3),
    Promise.resolve(4)
  ]. map(p => {
    p.catch(() => 'undefined')
  }))
  .then((data) => console.log("success!!!!!", data))
  .catch(() => console.log("errorrrrrr"))
  
  
  //Async Await
  
  //example9
  async function check(){
    return 1
  }
  check().then((d) => console.log(d))  // 1 
  
  
  //example10
  async function exp10 () {
    let prom = Promise.resolve(1000)
    let result = await prom;
     console.log("exp10", result)
  
  }
  exp10();
  
  //example 11
  async function exp11() {
      let data = await fetch(`https://developer.github.com/v3/users/mahima`);
      let result = await data.json();
      console.log("exp11",result)
  }
  
  exp11();
  
  //example 12
  
  async function f() {
    try{
      let err =await Promise.reject(" rejectedhello");
    }catch(error) {
        console.log("exp12", error)
    }
  }
  
  f()
  
  //example 13
  async function loadJson(url) {
    let data = await fetch(url);
    if(data.status === 200){
      let res = await data.json();
      return res;
    }else {
      throw new Error(data.status)
    }
  }
  loadJson('no-such-user.json').catch(err => console.log(err));
  
  //example 14
  //async map
  async function example() {
    const start = Date.now()
    let i = 0
    function res(n) {
      const id = ++i
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
          console.log(`res #${id} called after ${n} milliseconds`, Date.now() - start)
        }, n)
      })
    }
  
    const data = await Promise.all([res(3000), res(2000), res(1000)])
    console.log("hi")
    console.log(`Promise.all finished`, Date.now() - start);
    //  Promise.all([res(3000), res(2000), res(1000)])
    //  .then(data => {
    //    console.log(data)
    //  })
    //  console.log("hi")
  }
  
  example()
  //example 14
  //implementation of AsyncMap or Promise.all
  // asyncMap([
  // function(cb){
  //  setTimeout(function(){
  //    cb('one');
  //  }, 100);
  // },
  // function(cb){
  //  setTimeout(function(){
  //    cb('two');
  //  }, 500);
  // }
  // ],
  // function(results){
  //  // the results array will equal ['one','two'] even though
  //  // the second function had a shorter timeout.
  //  console.log(results); // ['one', 'two']
  // });
  
  function asyncMap  (tasks, callback){
    let result = [];
    let counter =0;
    for(let i =0; i<tasks.length; i++){
      tasks[i]((val) => {
        result.push(val);
        counter++;
        if(counter === tasks.length){
          callback(result);
        }
      })
    }
  }
  
  
  asyncMap([res(3000), res(2000), res(1000)],function (result) {
     console.log(`Promise.all finished`, Date.now() - start);
  })
  
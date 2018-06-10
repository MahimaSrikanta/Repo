// do not touch this function
function randomlyThrowError(x) {
  var i = Math.round(Math.random() * x);

  if (i % 2 === 0) {
    console.log(x);
  } else {
    throw new Error("Randomly Threw Error!");
  }

}


// do not touch this function
function randomlyThrowError2(x,z) {
  var i = Math.round(Math.random() * x * z);

  if (i % 2 === 0) {
    console.log(x);
  } else {
    throw new Error("Randomly Threw Error!");
  }

}

function getSafeFunction(fn) {
  // Code goes here
   
  return function () {
    let args = arguments
    try{
      fn.apply(this, arguments);
    }catch(e){
      console.log("error");
    } 
  }
}

// test
var safeFunction = getSafeFunction(randomlyThrowError);

for (let i = 1; i<10; i++) {
  safeFunction(i);
}


var safeFunction2 = getSafeFunction(randomlyThrowError2);

for (let i = 1; i<10; i++) {
  safeFunction2(i, 3);
}

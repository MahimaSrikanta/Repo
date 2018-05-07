var hash = {a:1,b:2, c:{c1:{c11:6, c12:2}, c2:4}}

var hashing = function (hash){
  var result ={};
  if(Object.keys(hash).length === 0) {
    return
  }
  for(var keys in hash) {
    if(typeof(hash[keys])=== 'object'){
      var flatten = hashing(hash[keys]);
      for(var i in flatten) {
        result[`${keys}.${i}`] = flatten[i]
      }
    }
    else {
    result[keys] = hash[keys]
   }
  }
  return result
}

hashing(hash)

//ouput:  {a: 1, b: 2, 'c.c1.c11': 6, 'c.c1.c12': 2, 'c.c2': 4 }
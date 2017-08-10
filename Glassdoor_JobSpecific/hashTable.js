/*Hash table */



var hashing = function (key,max) {
  return key.split("").reduce(function (a,b) {
    //console.log(a,b)
    return a+b.charCodeAt(0);
  }, 0) % max;
}

var hashTable = function () {
  this.storage = [];
  this.max =9;
  
}

hashTable.prototype.add = function (key, value) {
  var index = hashing(key, this.max);
  var bucket = [];
  var updated = false;
  console.log(index, key);
  if(this.storage[index] === undefined) {
    this.storage[index] = bucket;
    bucket.push([key, value]);
  } else {
    //check if there already key exists, yes, replace it else add a new key
    var tempBuck = this.storage[index];
    for(var i =0; i<tempBuck.length; i++) {
      if(tempBuck[i][0] === key) {
        tempBuck[i][1] = value;
        updated = true;
      } 
    }
    if(!updated) {
     tempBuck.push([key, value])
    }
  }
  console.log(this.storage);
}

var hash = new hashTable();
hash.add("mahi",1);
hash.add("mahi",2);
hash.add("sri",2);
hash.add("rrh",2);
// ES6 Syntax 

var a = {"item" :"mahi"};
var {item} = a;
console.log(item) // "mahi";


var state = {
  items: Array(5).fill(1).map((x,i) => ({id:i}))
}
console.log(state);

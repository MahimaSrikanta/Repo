/**
 * initialize your data structure here.
 */
 //accepted
var MinStack = function() {
  this.stack= [];
  this.minStack =[];
  this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
   if(this.minStack.length ===0) {
    this.min = Infinity
  }
  if(this.min >= x) {
    this.min =x;
    this.minStack.push(x);
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var temp = this.stack.pop();
  if(temp === this.min) {
    this.minStack.pop();
    this.min = this.getMin();

  }
  return temp;  
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if(this.minStack.length ===0) {
    return null;
    this.min = Infinity
  }
  return this.minStack[this.minStack.length-1];
    
};



 var obj = new MinStack();
 obj.push(46)
 obj.push(46)
 obj.push(47)
 obj.pop()
 obj.pop()
 //obj.pop();
 //obj.push(47);
 var param_3 = obj.top()
 var param_4 = obj.getMin();
 param_4
 
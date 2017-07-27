/*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:
Given the list [[1,1],2,[1,1]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:
Given the list [1,[4,[6]]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

*/

//Not working , Logic looks fine, but there is some issue with getInteger() built in method

var NestedIterator = function(nestedList) {
   this.stack = [];   
    for(var i =nestedList.length-1; i>= 0; i--) {
    
        if(nestedList[i].isInteger()) {
          this.stack.push(nestedList[i].getInteger());
        } else {
            console.log("resut")
          this.stack.push(nestedList[i].getList());
        }
    }   
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */

NestedIterator.prototype.hasNext = function() {
    console.log(this.stack)
  while(this.stack.length !== 0) {   
    if( ! this.stack[this.stack.length-1].isInteger()) { 
        var temp = this.stack.pop();
       for(var j =temp.length-1; j>=0; j--) {
         this.stack.push(temp[j]);
       } 
    }else {
        return true;
    }
  }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
   return this.stack.pop().getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
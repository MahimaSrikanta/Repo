/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity *);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
/**
 * @param {number} capacity
 */


/**************************************/
 //Some error , while running test cases , but works fine with given scenario and logic looks reasonable

 // using Doubly linked list and hash table
 // Insertion O(1), deletion O(1)
 // all the least used nodes gets accumlated near head and all most used used gets accumulated near tail
 // insertion through tail and removal from head
 // need doubly linked list as we will move them ost recently used node to tail 


var Node  = function (key,value) {
  this.value = [key,value];
  this.next = null;
  this.prev = null;
}
var LRUCache = function(capacity) {
  this.head = null;
  this.tail = null;
  this.hash ={};
  this.counter=0;
  this.capacity = capacity;
  
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // move the recently accessed to tail;
  if( this.hash[key] !== undefined ) {
    var temp = this.hash[key]
    this.head = this.head.next;
    temp.next = null;
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
    return this.hash[key].value[1] ;
  }else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  var node = new Node(key,value);
  this.hash[key] = node;
 
  
  if(this.counter === this.capacity) {  // --> check if the cache is full, yes then remove the least used from head of the list 
    delete this.hash[this.head.value[0]];
    this.head = this.head.next;
    this.head.prev = null;
    this.counter--;
    if(this.counter ===0) {
      this.head = null;
      this.tail = null;
    }
  }
    if(this.head === null && this.tail === null) {  // --> check if this is the first element and insert the node at the tail
      this.head = node;
      this.tail = node;
      this.counter++;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.counter++;
    }
    //console.log(this.tail, this.counter);
    // console.log(this.hash["2"], "ji")
  };



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
 
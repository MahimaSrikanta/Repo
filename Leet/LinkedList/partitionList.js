/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 
 //Accepted

 //1/ create a new pre list with all calues lesser than x
 //2. crete a new post list with all values greater than x
function ListNode(val) {
 this.val = val;
 this.next = null;
}
var partition = function(head, x) {
  var pre = new ListNode(0);
  var post = new ListNode(0);
 
  var curr = head;
  var preHead = pre;
  var postHead = post;
  while(curr !== null) {
    if(curr.val < x) {
      preHead.next = new ListNode(curr.val)
      preHead = preHead.next;
    }else {
      postHead.next = new ListNode(curr.val)
      postHead = postHead.next;
    }
    curr = curr.next;
  }
 //console.log(JSON.stringify(pre), JSON.stringify(post) );
  preHead.next = post.next;
 console.log(JSON.stringify(pre.next)) 
 
};


 var list = new ListNode(1);
var list1 = new ListNode(4);
var list3 = new ListNode(3);
var list4 = new ListNode(2);
var list5 = new ListNode(5);
var list6 = new ListNode(2);
list.next = list1;
list1.next = list3;
list3.next = list4;
list4.next = list5;
list5.next = list6;
partition(list, 3);
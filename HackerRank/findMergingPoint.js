function findMergeNode(headA, headB) {
    var fakeA= headA;
    var fakeB = headB
  while(headA !== headB){
      if(headA=== null){
          headA = fakeB;
          headB = headB.next;
      } else if(headB === null){
          headB = fakeA;
          headA= headA.next;
      } else {
      headA = headA.next;
      headB = headB.next;
      }
  }
    
    return headA.data

}
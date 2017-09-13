function mergeLinkedLists( headA, headB) {
    var temp = new Node(0);
    var fakeT = temp;
    
    while(headA !== null && headB !==null){
        if(headA.data < headB.data){
            fakeT.next = new Node(headA.data);
            headA = headA.next;
        
        }else {
            fakeT.next = new Node(headB.data);
            headB = headB.next;
        }
        
        fakeT = fakeT.next;
    }
    if(headA !== null) {
        fakeT.next = headA;
    } else if(headB !== null){
        fakeT.next = headB;
    }
   return temp.next; 
}

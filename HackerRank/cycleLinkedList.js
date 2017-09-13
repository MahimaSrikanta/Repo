function hasCycle(head) {
        var result =0;
    if(head === null ){
        return result
    }
    var fast = head;
    var curr = head;

    
    while(fast !== null && fast.next !== null){
        curr = curr.next;
        fast = fast.next.next;
        if(curr === fast){
          return 1; 
        }
    }
    
  
    return result
}
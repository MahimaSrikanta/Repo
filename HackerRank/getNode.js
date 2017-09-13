function getNodeValue( head, position) {
    var count =0;
    var result;
   var countback = function (head, position) {
       if(head === null){
           return;
       }
      countback(head.next, position);
       if(count === position){
           result = head.data;
       }
      count++;
       
   }
  countback(head, position);
    return result;
}
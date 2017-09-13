/*
    Print elements of a linked list in reverse order as standard output
    head pointer could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reversePrint(head) {
    if(head === null || head.next === null){
        return head;
    }
    var fake = head;
    var curr = head;
    while(curr.next !== null) {
        var node = new Node(curr.next.data);
        curr.next = curr.next.next;
        node.next = fake;
        fake = node;
    }
    head= fake;
    while(fake !== null){
        console.log(fake.data);
        fake= fake.next
    }
}

//Using recursions
function reversePrint(head) {
    if(head === null || head.next === null){
        return head;
    }
    var print = function(head){
        if(head=== null) {
            return;
        }
        print(head.next);
        console.log(head.data)
    }
    print(head)
}
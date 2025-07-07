/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let rlist = null;
    let ptr = head;
    while(ptr != null){
        let newNode = new ListNode(ptr.val);
        newNode.next = rlist; 
        rlist = newNode;
        ptr = ptr.next;
    }
    return rlist;
};
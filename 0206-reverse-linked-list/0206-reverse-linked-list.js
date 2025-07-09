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
    let ptr = head;
    while(ptr != null && ptr.next != null){
        let temp = ptr.next;
        ptr.next = temp.next;
        temp.next = head;
        head = temp;
    }
    return head;
};
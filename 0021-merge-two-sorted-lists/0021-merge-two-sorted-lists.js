/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let merge = new ListNode();
    let mptr = merge;
    let aptr = list1;
    let bptr = list2;
    while (aptr != null && bptr != null) {
        if (aptr.val > bptr.val) {
            mptr.next = bptr;
            bptr = bptr.next;
        } else {
            mptr.next = aptr;
            aptr = aptr.next;
        }
        mptr = mptr.next;
    }
    if (aptr != null) {
        mptr.next = aptr;
    }
    if (bptr != null) {
        mptr.next = bptr;
    }
    return merge.next;
};

//time = O(n)
//space = O(n)
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
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;
    }
    if (list1 == null && list2 == null) {
        return list1;
    }
    if (list1.val > list2.val) {
        let temp = list1;
        list1 = list2;
        list2 = temp;
    }
    let a = list1;
    let preva = a;
    let b = list2;
    while (a != null && b != null) {
        if (a.val > b.val) {
            let temp = b;
            b = b.next;
            preva.next = temp;
            temp.next = a;
            preva = temp;
        } else {
            preva = a;
            a = a.next;
        }
    }
    if (b != null && preva != null) {
        preva.next = b;
    }
    return list1;
};

//time = O(n)
//space = O(1)
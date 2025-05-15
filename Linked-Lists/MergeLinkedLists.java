class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        ListNode listCurr1 = list1;
        ListNode listCurr2 = list2;

        while (listCurr1 != null && listCurr2 != null) {

            if (listCurr1.val > listCurr2.val) {
                tail.next = listCurr2;
                listCurr2 = listCurr2.next;
            } else {
                tail.next = listCurr1;
                listCurr1 = listCurr1.next;
            }
            tail = tail.next;
        }

        if (listCurr1 != null) {
            tail.next = listCurr1;
        } else if (listCurr2 != null) {
            tail.next = listCurr2;
        }

        return dummy.next;
    }
}

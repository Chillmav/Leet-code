package Linked-Lists;

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        int one = 0;

        while (l1 != null && l2 != null) {
            int sum = l1.val + l2.val + one;
            if (sum >= 10) {

                int val = sum - 10;
                tail.next = new ListNode(val);
                one = 1;

            } else {

                tail.next = new ListNode(sum);
                one = 0;

            }
            l1 = l1.next;
            l2 = l2.next;
            tail = tail.next;
        }

        while (l1 != null) {

            int sum = l1.val + one;

            if (sum == 10) {
                int val = sum - 10;
                tail.next = new ListNode(val);
            } else {
                int val = l1.val + one;
                tail.next = new ListNode(val);
                tail = tail.next;
                l1 = l1.next;
                tail.next = l1;
                return dummy.next;
            }
            l1 = l1.next;
            tail = tail.next;
        }

        while (l2 != null) {

            int sum = l2.val + one;

            if (sum == 10) {
                int val = sum - 10;
                tail.next = new ListNode(val);
            } else {
                int val = l2.val + one;
                tail.next = new ListNode(val);
                tail = tail.next;
                l2 = l2.next;
                tail.next = l2;
                return dummy.next;
            }
            l2 = l2.next;
            tail = tail.next;
        }

    if (one == 1) {
        tail.next = new ListNode(1);
    }

    return dummy.next;
    }
}

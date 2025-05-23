class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        ListNode left = head;
        ListNode right = head;
        if (head.next == null) return null;

        for (int i = 0; i < n; i++) {
            right = right.next;
        }

        if (right == null) {
            return head.next;
        }
        
        while (right.next != null ) {

            left = left.next;
            right = right.next;


        }
        left.next = left.next.next;

        return head;
    }
}
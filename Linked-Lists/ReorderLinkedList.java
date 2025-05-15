class Solution {

    public void reorderList(ListNode head) {

        if (head == null || head.next == null) return;

        ListNode slower = head;
        ListNode faster = head;

        while (faster != null && faster.next != null && faster.next.next != null ) {
            slower = slower.next;
            faster = faster.next.next;
        }


        ListNode endLeft = slower;
        ListNode startRight = slower.next;
        endLeft.next = null;
        // Reversing second half

        ListNode dummy = null;
        ListNode curr = startRight;

        while (curr != null) {
            ListNode temp = curr.next;
            curr.next = dummy;
            dummy = curr;
            curr = temp;
        }

        ListNode first = head;
        ListNode second = dummy;

        while (second != null) {

            ListNode temp1 = first.next;
            ListNode temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;

        }
        
    }
}
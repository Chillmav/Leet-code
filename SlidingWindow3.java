// suboptimal solution O(n^2) in the worst case.

import java.util.HashSet;
import java.util.Set;

class SlidingWindow3 {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0) return 0;
        int maxL = 1;
        int l = 0;
        for (int r = 1; r < s.length(); r++) {
            char c = s.charAt(r);
            for (int start = l; start < r; start++) {
                if (s.charAt(start) == c) {
                    l = start + 1;
                }
            }
            maxL = Math.max(maxL, 1 + r - l);
        }

        return maxL;
    }
}

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxL = 0;
        int l = 0;
        Set<Character> seen = new HashSet<>();
        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            while (seen.contains(s.charAt(r))) {
                seen.remove(s.charAt(l));
                l++;
            }
            seen.add(c);
            maxL = Math.max(maxL, 1 + r - l);
        }

        return maxL;
    }
}
class Solution {

    public int characterReplacement(String s, int k) {

    Map<Character, Integer> map = new HashMap<>();
    
    int left = 0;
    int result = 0;
    
    
    for (int right = 0; right < s.length(); right++) {

        char c = s.charAt(right);
        int len = right - left + 1;

        // map operations
        if (map.get(c) == null) {
            map.put(c, 1);
        } else {
            map.put(c, map.get(c) + 1);
        }

        int mostFreq = 0;
        for (char letter = 'A'; letter <= 'Z'; letter++) {
            int frequency = map.getOrDefault(letter, 0);
            if (frequency > mostFreq) {
                mostFreq = frequency;
            }

        }

        if (right - left + 1 - mostFreq > k) {
            map.put(s.charAt(left), map.get(s.charAt(left)) - 1);
            left++;
        }
        result = Math.max(result, right - left + 1);

    }

        return result;
    }

}
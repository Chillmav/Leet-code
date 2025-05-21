
public class PermutationInString {
    
    public boolean checkInclusion(String s1, String s2) {

        if (s1.length() > s2.length()) return false;

        HashMap<Character, Integer> mapS1 = new HashMap<>();
        HashMap<Character, Integer> mapS2 = new HashMap<>();

        int right = s1.length();
        int left = 0;

        for (int i = 0; i < right; i++) {

            char s1Char = s1.charAt(i);
            char s2Char = s2.charAt(i);

            if (mapS1.containsKey(s1Char)) {
                mapS1.put(s1Char, mapS1.get(s1Char) + 1);
            } else {
                mapS1.put(s1Char, 1);
            }

            if (mapS2.containsKey(s2Char)) {
                mapS2.put(s2Char, mapS2.get(s2Char) + 1);
            } else {
                mapS2.put(s2Char, 1);
            }

            
        }

        if (mapS1.equals(mapS2)) return true;
        

        for (int window = right; window < s2.length(); window++) {

            if (mapS2.get(s2.charAt(left)) == 1) {
                mapS2.remove(s2.charAt(left));
            } else {
                mapS2.put(s2.charAt(left), mapS2.get(s2.charAt(left)) - 1);
            }

            if (mapS2.containsKey(s2.charAt(window))) {
                mapS2.put(s2.charAt(window), mapS2.get(s2.charAt(window)) + 1);
            } else {
                mapS2.put(s2.charAt(window), 1);
            }
            if (mapS1.equals(mapS2)) return true;
            left++;
        }

    return false;
    }
    
}

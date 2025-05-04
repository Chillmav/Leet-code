import java.util.ArrayList;
import java.util.Stack;

class Solution {

    public boolean validParenthesis(String str) {

        Stack<Character> s = new Stack<>();

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == '(') {
                s.push('(');
            } else if (c == ')') {
                if (s.empty() || s.pop() != '(') {
                    return false;
                } 
            }
        }
        return s.empty();
    }

    public ArrayList<String> generateParenthesis(int n) {

        ArrayList<String> res = new ArrayList<String>();
        res.add("()");
        res.add("))");
        res.add("((");
        res.add(")(");

        for (int i = 1; i < n; i++) {
            ArrayList<String> newRes = new ArrayList<String>();
            for (String element: res) {
                newRes.add(element + "()");
                newRes.add(element + "))");
                newRes.add(element + "((");
                newRes.add(element + ")(");
            }
            res = newRes;
        }
        ArrayList<String> newRes = new ArrayList<String>();

        for (String string: res) {
            if (validParenthesis(string)) {
                newRes.add(string);
            }
        }
        return newRes;
    }
}
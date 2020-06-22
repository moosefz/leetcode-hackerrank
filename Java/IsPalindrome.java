public class IsPalindrome {
    public static boolean isPalindrome(String s) {

        s = s.toLowerCase().replaceAll("\\W", "");
        System.out.println(s);
        int start = 0;
        int end = s.length()-1;

        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(start) != s.charAt(end)) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
    }
}

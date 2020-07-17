/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */

import java.util.HashSet;
import java.util.Set;

public class JewelsAndStones {

    public static int JewelsAndStones(String J, String S) {
        int counter = 0;
        Set<Character> mySet = new HashSet<>();

        // Add each character to set
        for(char c : J.toCharArray()) {
            mySet.add(c);
        }

        // Check if character exists in set
        for (char c : S.toCharArray()) {
            if(mySet.contains(c)) {
                counter++;
            }
        }

        return counter;
    }


    public static void main(String[] args) {

        System.out.println(JewelsAndStones("aA", "aAAbbbb"));
    }


}

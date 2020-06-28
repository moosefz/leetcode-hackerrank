// Return the least amount of coins required to make change for a passed double
public class MakingChange {

    public static int makeChange(double amount) {
        int coinCount = 0;
        double[] coins = {0.01, 0.05, 0.10, 0.25, 1.00};

        for(int i = coins.length-1; i >= 0; i--) {
            // early break - minimum coin count reached
            if(amount == 0) {
                return coinCount;
            }

            // update coinCount and amount
            coinCount += amount / coins[i];
            amount = amount % coins[i];
        }
        return coinCount;
    }


    public static void main(String[] args) {
        System.out.println(makeChange(2.35));
        System.out.println(makeChange(63.42));
    }
}

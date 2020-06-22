public class MaxProfit {
    public static int maxProfit(int[] nums) {

        int max = 0;
        int min = Integer.MAX_VALUE;

        for(int i = 0; i < nums.length-1; i++) {
            if(nums[i] < min) {
                min = nums[i];
            } else {
                max = Math.max(max, nums[i+1] - min);
            }
        }

        return max;
    }

    public static void main(String[] args) {
        int[] stocks = {7,6,4,3,1};
        System.out.println(maxProfit(stocks));
    }
}

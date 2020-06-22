public class HouseRobber {
    // House robber
    public static int houseRobber(int[] nums) {
        if(nums == null || nums.length == 0) return 0; // no houses
        if(nums.length == 1) return nums[0]; // one house
        if(nums.length == 2) return Math.max(nums[0], nums[1]); // max of two houses

        // > 2 houses
        int[] arr = new int[nums.length];
        arr[0] = nums[0];
        arr[1] = Math.max(nums[0], nums[1]);

        for(int i = 2; i < nums.length; i++) {
            arr[i] = Math.max(nums[i] + arr[i-2], arr[i-1]);
        }

        return arr[arr.length-1];
    }

    public static void main(String[] args) {
        int[] arr = {5,9,0,1,5,2,8,5,8};
        System.out.println(houseRobber(arr));
    }
}

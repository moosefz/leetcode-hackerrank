// Return the max sub array

var maxSubArray = function(nums) {
    
    var rollingMax = 0, currentSum = 0;

     if(nums.length === 1) {
            rollingMax = nums[0];
            return rollingMax;
        }
    
    nums.forEach((num) => { 
        currentSum = Math.max(0, currentSum + num);
        rollingMax = Math.max(rollingMax, currentSum);
    })
    
    return rollingMax;
    
};

console.log(maxSubArray([1,2,3,4,5,6,7]));
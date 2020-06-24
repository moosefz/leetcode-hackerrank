// We want to find the "container" that will hold the most water (area)
// based on the provided array (between two points)
// O(n) TC, O(1) SC
const mostWater = height => {
   let maxArea = 0;
   let start = 0;
   let end = height.length-1;

   while(start < end) {
       /* Calculate current area by determining the smaller length of the two points
       multiplied by the width (the distance between the two indicies).

       Check to see if currentArea is larger than maxArea and replace
       */
       const currentArea = Math.min(height[start], height[end]) * (end-start);
       maxArea = Math.max(maxArea, currentArea);

       // Whichever length is smaller, increment forward/backward to try another
       if(height[start] < height[end]) {
           start++;
       } else {
           end--
       }
   }

   // Return the largest area
   return maxArea;
}

console.log(mostWater([1,8,6,2,5,4,8,3,7]));
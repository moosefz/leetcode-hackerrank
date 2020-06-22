import java.util.Arrays;


public class IntervalMeetings {

    public static boolean intervalMeetings(int[][] intervals) {
        int[] start = new int[intervals.length];
        int[] end = new int[intervals.length];

        // split start and end times
        for(int i = 0; i < intervals.length; i++) {
            int[] subArray = intervals[i];
            start[i] = subArray[0];
            end[i] = subArray[1];
        }

        // sort the arrays
        Arrays.sort(start);
        Arrays.sort(end);

        // find intersects
        for(int i = 0; i < start.length-1; i++) {
            if(start[i+1] < end[i]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[][] times = {{7,10}, {5,10}, {15,20}};

        System.out.println(intervalMeetings(times));
    }
}

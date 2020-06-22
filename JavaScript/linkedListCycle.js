// determine if a linkedList has a cycle
// E.g. 1 -> 2 -> 3 -> 4 
//                ^     |
//                | <- \/
const linkedListCycle = list => {

    let slow = list.head;
    let fast = list.head;

    while(fast && fast.next) {
        if(slow === fast) {
            return true;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}
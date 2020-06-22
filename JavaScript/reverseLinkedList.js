// reversing a linkedList in O(n) time, O(1) space complexity
// by pointing in reverse order.
const reverseLinkedList = list => {
    let currentNode = list.head;
    let prevNode = null;

    while(currentNode) {
        let tmpNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;

        // next node
        currentNode = tmpNode;
    }

    return prevNode;
}
/*

Given a singly linked list, return a random node's value from the linked list. 
Each node must have the same probability of being chosen.

Follow up:
What if the linked list is extremely large and its length is unknown to you? 
Could you solve this efficiently without using extra space? 

*/


var Solution = function(head) {
    this.head = head;
}

// O(n) Time, O(1) Space
Solution.prototype.getRandom = function() {
    let currentNode = this.head;
    let count = 0;

    // determine size of list
    while(currentNode) {
        count++;
        currentNode = currentNode.next;
    }

    // randomize node selection
    let randomNode = Math.floor(Math.random() * count);
    currentNode = this.head;
    count = 0;

    // traverse to random node
    while(count !== randomNode) {
        count++;
        currentNode = currentNode.next;
    }

    // return random node
    return currentNode.val;
}
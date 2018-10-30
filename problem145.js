// This problem was asked by Google.

// Given the head of a singly linked list, swap every two nodes and return its head.

// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

// will there always be an even number? that is, do I have to worry about the last element not getting swapped due to no complement?

function swap(head) {
    let index = head;
    while (index.next !== null) {
        let temp = index.val;
        index.val = index.next.val;
        index.next.val = temp;
        index = index.next.next;
    }
}
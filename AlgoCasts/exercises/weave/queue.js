// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;

        return ++this.size;
    }
    peek() {
        if (this.size == 0) {
            return undefined;
        } else {
            return this.head ? this.head.val : undefined;
        }
    }
    remove() {
        if (this.size === 0) {
            return undefined;
        }
        let current = this.head;
        this.head = this.head ? this.head.next : null;
        this.size--;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
        }
        return current ? current.val : undefined;
    }
}

module.exports = Queue;

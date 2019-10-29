// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
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

// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
class Node {
    constructor(val) {
        this.val = val;
    }
}
class Stack {
    constructor() {
        this.size = 0;
        this.top = null;
        this.bottom = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.size == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.size++;
        return this.size;
    }
    pop() {
        if (this.size == 0) {
            return undefined;
        }
        let temp = this.top;
        this.top = this.top.next;
        this.size--;
        if (this.size === 0) {
            this.top = null;
            this.bottom = null;
        }
        return temp ? temp.val : undefined;
    }
    peek() {
        if (this.size === 0) {
            return undefined;
        }
        return this.top ? this.top.val : undefined;
    }
}

module.exports = Stack;

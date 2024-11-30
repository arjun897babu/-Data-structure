class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deQueue() {
    if (this.isEmpty()) throw Error("no elem found");
    let value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail == null;
    }
    this.length--;
    return value;
  }

  proritizeQ(value) {
    if (this.isEmpty()) return undefined;
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (prev === null) return;
        prev.next = current.next;
        current.next = this.head;
        this.head = current;
        return;
      }
      current = current.next;
    }
  }

  removeValue(value) {
    if (this.isEmpty()) throw Error("queue is empty");
    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = null;
      }
      return;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        if (current === this.tail) {
          this.tail = prev;
        }
        this.length--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  reverseQ() {
    if (this.isEmpty()) return undefined;
    let prev = null;
    let current = this.head;
    if (this.head.next === null) return;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.tail = this.head;
    this.head = prev;
  }

  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  peeek() {
    return this.head.value;
  }

  print() {
    if (this.isEmpty()) return undefined;
    let current = this.head;
    let stackV = "";
    while (current) {
      stackV += "-->" + current.value;
      current = current.next;
    }
    console.log(stackV);
  }
}

const q = new Queue();
for (let i = 0; i < 10; i++) {
  q.enqueue(i + 1);
}

q.print();
q.enqueue(12);
q.print();
q.removeValue(10);
q.print();
q.reverseQ();
q.print();
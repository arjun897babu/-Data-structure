export class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head == null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next === newNode;
  }

  reverse() {
    if (!this.head) {
      return null;
    }

    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  removemiddle() {
    let prev = null;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = slow.next;
  }
}

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

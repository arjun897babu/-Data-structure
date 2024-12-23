class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    if (this.isEmpty()) {
      return undefined;
    }
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    if (this.isEmpty()) return undefined;
    let current = this.head;
    let print = "";
    while (current) {
      print += current.value + "==>";
      current = current.next;
    }
    console.log(print);
  }

  removeMiddle() {
    if (this.isEmpty()) return undefined;
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let fast = this.head;
    let prev = null;
    let slow = this.head;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (prev) {
      prev.next = slow.next;
    }
  }

  removeOdd() {
    if (!this.head) return undefined;
    while (this.head && this.head.value % 2 !== 0) {
      this.head = this.head.next;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value % 2 !== 0) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }
  }

  removeEven() {
    if (!this.head) return undefined;
    while (this.head && this.head.value % 2 == 0) {
      this.head = this.head.next;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value % 2 == 0) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }
  }

  isPalindrome() {
    if (this.isEmpty()) return undefined

    let fast = this.head
    let slow = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    let firsth = this.head
    let secondh = prev

    while (secondh) {
      if (firsth.value !== secondh.value) {
        return false
      }

      firsth = firsth.next
      secondh = secondh.next
    }

    return true

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


module.exports = LinkedList
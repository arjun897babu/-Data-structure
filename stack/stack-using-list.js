class Stack {
  constructor() {
    this.tail = null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      newNode.next = this.tail;
      this.tail = newNode;
    }
  }
  pop() {
    if (this.tail === null) return "stack empty";
    const value = this.tail.value;
    this.tail = this.tail.next;
    return value;
  }
  peek() {
    if (this.tail == null) throw Error("stack is empty");
    return this.tail.value;
  }

  isEmpty() {
    return this.tail === null;
  }

  size() {
    if (this.tail === null) return 0;
    else if (this.tail.next === null) return 1;
    let current = this.tail;
    let size = 0;
    while (current) {
      current = current.next;
      size++;
    }
    return size;
  }

  removeValue(value) {
    if (this.isEmpty()) return undefined;
    let current = this.tail;
    let prev = null;
    if (this.peek() === value) {
      this.tail = this.tail.next;
      return;
    }
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }

    throw Error("value is not found");
  }

  changeValue(value, newValue) {
    let current = this.tail;
    if (current === null) return undefined;
    while (current) {
      if (current.value === value) {
        current.value = newValue;
        return;
      }
      current = current.next;
    }

    throw Error("value not found");
  }

  deleteNthElement(n) {
    if (this.isEmpty()) return undefined;
    if (n > this.size()) throw Error("invalid position");
    let count = 1;
    let current = this.tail;
    if (n === 1) {
      this.tail = this.tail.next;
      return;
    }
    let prev = null;
    while (current) {
      if (count === n) {
        prev.next = current.next;
        return;
      }
      count++;
      prev = current;
      current = current.next;
    }
  }

  prioratize(value) {
    if (this.isEmpty()) return undefined;
    let current = this.tail;
    if (current.value === value) {
      return;
    }

    let prev = null;
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        let temp = this.tail;
        this.tail = current;
        this.tail.next = temp;
        return;
      }
      prev = current;
      current = current.next;
    }

    throw Error("value not found");
  }
  print() {
    if (this.isEmpty()) throw Error("stack is empty");
    let current = this.tail;
    let stack = "";
    while (current) {
      stack += ` ${" " + current.value}`;
      current = current.next;
    }

    console.log(stack);
  }

  reverse() {
    if (this.isEmpty()) return undefined;
    let current = this.tail;
    let temp = new Stack();
    while (current) {
      temp.push(this.pop());
      current = current.next;
    }
    this.tail = temp.tail;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const newS = new Stack();
console.log(newS.isEmpty());
for (let i = 0; i < 10; i++) newS.push(i + 1);
newS.print();
console.log(newS.size());
const pop = newS.pop();
console.log(pop);
console.log(newS.size());
newS.print();
newS.reverse();
newS.print();
newS.prioratize(5);
newS.print();
newS.removeValue(5);
newS.print();
newS.deleteNthElement(5);
newS.print();
console.log(Math.pow(9,9))
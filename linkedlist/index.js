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

  isPalindrome(){
    if(this.isEmpty()) return undefined
    
    let fast = this.head
    let slow = this.head
    while(fast&&fast.next){
        slow =  slow.next
        fast=fast.next.next
    }
    let middle = slow.next
    let prev = null
    while(middle){
        let next  = middle.next
        middle.next = prev
        prev = middle
        middle = next
    }

    let firsth = this.head
    let secondh = prev

    while(secondh){
        if(firsth.value!==secondh.value){
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

const array1 = [1, 2, 3, 5, 12]; 
const array2 = [1, 3, 4, 6, 8, 12]; 


const ll = new LinkedList();
const ll2 = new LinkedList();

for (let i = 0; i < array1.length; i++) {
  ll.append(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
  ll2.append(array2[i]);
}

console.log("List 1:");
ll.print();
console.log("List 2:");
ll2.print();

const mergedList = mergell(ll, ll2);

console.log("Merged sorted list:");
mergedList.print();

function mergell(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  const newNode = new LinkedList();
  let curr1 = l1.head;
  let curr2 = l2.head;
  while (curr1 && curr2) {
    if (curr1.value < curr2.value) {
      newNode.append(curr1.value);
      curr1 = curr1.next;
    } else {
      newNode.append(curr2.value);
      curr2 = curr2.next;
    }
  }

  while (curr1) {
    newNode.append(curr1.value);
    curr1 = curr1.next;
  }

  while (curr2) {
    newNode.append(curr2.value);
    curr2 = curr2.next;
  }

  return newNode;
}
const ll4 = new LinkedList()
const array3 = [1,2,3,3,2,1]
for (let i = 0; i < array3.length; i++) {
    ll4.append(array3[i])
    
}
console.log(ll.isPalindrome())
console.log(ll2.isPalindrome())
console.log(ll4.isPalindrome())
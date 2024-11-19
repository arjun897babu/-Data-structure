class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // Pointer to the next node
  }
}

class HashTable {
  constructor(size = 10) {
    this.loadFactor = 0.7;
    this.elemCount = 0;
    this.size = size;
    this.bucket = new Array(size); // Array to hold linked list heads
  }

  // Hash function to calculate the index
  hashKey(key) {
    let total = 0;
    for (let char of key) {
      total += char.charCodeAt(0);
    }
    return total % this.size;
  }

  // Insert a key-value pair
  insert(key, value) {
    const index = this.hashKey(key);
    if (!this.bucket[index]) {
      this.bucket[index] = new Node(key, value); // If no list exists, create a new node
      return;
    }

    let current = this.bucket[index];
    while (current.next) {
      if (current.key === key) {
        current.value = value; // Update value if key already exists
        return;
      }
      current = current.next;
    }
    current.next = new Node(key, value); // Add new node at the end
    this.elemCount++;
    if (this.getLoadFactor() >= this.loadFactor) {
      this.resize();
    }
  }

  getLoadFactor() {
    return this.elemCount / this.size;
  }
  resize() {
    this.oldBucket = this.bucket
    this.size*=2
    this.bucket = new Array(this.size)
    this.elemCount=0
    for(let x of this.bucket){
        let current = head;
        while(current){
            this.insert(current.key,current.next)
            current = current.next
        }
    }
  }
}

const ht = new HashTable(7);
ht.insert("joel", 20);
ht.insert("arjun", 26);
ht.insert("jocn", 26);

console.log(ht);

const jocnVal = ht.get("jocn");
console.log("Value for jocn:", jocnVal); // 26

ht.delete("arjun");
console.log(ht.get("arjun")); // null

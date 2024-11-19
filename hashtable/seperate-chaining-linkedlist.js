class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // Pointer to the next node
  }
}

class HashTable {
  constructor(size) {
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
  }

  // Retrieve a value by key
  get(k) {
    const index = this.hashKey(k);
    let current = this.bucket[index];

    while (current) {
      if (current.key === k) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  // Delete a key-value pair
  delete(k) {
    const index = this.hashKey(k); // Find the index for the key
    if(!this.bucket[index]){
      return null
    }
    
    let current = this.bucket[index];
    let prev = null;

    while (current) {
      if (current.key === k) {
        if (prev) {
          prev.next = current.next; // Skip the current node
        } else {
          // If it's the head node
          this.bucket[index] = current.next;
        }
        return;
      }
      prev = current;
      current = current.next; // Move to the next node
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

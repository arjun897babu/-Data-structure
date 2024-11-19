class HashTable {
  constructor(size) {
    this.size = size;
    this.bucket = new Array(size);
  }

  hashKey(key) {
    let total = 0;
    for (let char of key) {
      total += char.charCodeAt(0);
    }
    return total % this.size;
  }

  insert(key, value) {
    const index = this.hashKey(key);
     if (!this.bucket[index]) {
        this.bucket[index] = [];
    }
    for (let [k, v] of this.bucket[index]) {
        if (k === key) {
            v = value;
            return;
        }
    }
     this.bucket[index].push([key, value]);
   }

  get(key) {}
  delete(key) {}
}

const newTable = new HashTable(7);
newTable.insert("joel",20);
newTable.insert("arjun", 26);
newTable.insert("jocn", 78);
console.log(newTable);

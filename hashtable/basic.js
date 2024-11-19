
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
    const hashedKey = this.hashKey(key); // index
    this.bucket[hashedKey] = value;
  }
  get(key) {
    const index = this.hashKey(key);
    return this.bucket[index];
  }
  delete(key) {
    if (!key) return;
    const index = this.hashKey(key);
    delete this.bucket[index];
  }
}

const newHash = new HashTable(7)
newHash.insert('niv',13)
newHash.insert('arj','bw1')
console.log(newHash)
newHash.delete('arj')
console.log(newHash)
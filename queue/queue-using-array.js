class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.shift(value);
    return;
  }
  deQueue() {
    if (this.isEmpt()) return undefined;
    const elemV = this.queue.unshift();
    return elemV;
  }
  peeek() {
    if (this.isEmpt()) {
      throw Error("queue is zero ");
    } else {
      return this.queue[0];
    }
  }
  size() {
    return this.queue.length;
  }
  isEmpt() {
    return this.queue.size === 0;
  }
}

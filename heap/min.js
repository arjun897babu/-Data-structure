

class MinHeap {
    constructor() {
        this.heap = []
    }
    getLeftIndex(index) { 2 * index + 1 }
    getRightIndex(index) { 2 * index + 2 }
    getParentIndex(index) { Math.floor((index - 1) / 2) }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp() {
        let index = this.heap.length - 1
        while (index) {
            let parentIndex = this.getParentIndex();
            if (this.heap[parentIndex] <= this.heap[index]) break
            this.swap(index, parentIndex);
            index = parentIndex;
        };
    }
    extractMin() {
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index) {
        let min = index
        let rightIndex = this.getRightIndex(index);
        let leftIndex = this.getLeftIndex(index);
        if (leftIndex < this.heap.length && leftIndex < index) { index = leftIndex }
        if (rightIndex < this.heap.length && rightIndex < index) { index = rightIndex }

        if (index != min) {
            this.swap(index, min);
            this.heapifyDown(min)
        }
    }
}
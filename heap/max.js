class MaxHeap {

    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    getLeftIndex(index) {
        return 2 * index + 1
    }
    getRightIndex(index) {
        return 2 * index + 2
    };
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    extractMax() {

    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp() {
        let index = this.heap.length - 1
        while (index) {
            let parentIndex = this.getParentIndex(index)
            if (this.heap[parentIndex] >= this.heap[index]) break
            this.swap(parentIndex, index)
            index = parentIndex
        }
    }
    heapifyDown(index) {
        let max = index
        let rightIndex = this.getRightIndex(index)
        let leftIndex = this.getLeftIndex(index)

        if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[max]) {
            max = leftIndex
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[max]) {
            max = rightIndex
        }

        if (max != index) {
            this.swap(index, max)
            this.heapifyDown(max)
        }
    }


}
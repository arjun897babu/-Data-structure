const traversal = require('./graph-traversal')

// grapth with adj matrix
class Graph {
    constructor(size = 10) {
        this.size = size
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));

        /*
        new Array(size).fill(null).map(item=>Array(size).fill(0))
        ----------------------------------- 
         for (let i = 0; i < size; i++) {
            matrix[i] = []
            for (let j = 0; j < size; j++) {
                matrix[i][j]= 0
            }
        }

       */
    }

    addEdge(vertex1, vertex2, weight = 1) {

        this.resize(Math.max(vertex1, vertex2))

        this.matrix[vertex1][vertex2] = weight
        this.matrix[vertex2][vertex1] = weight
    }
    removeEdge(vertex1, vertex2) {
        if (this.isInvalid(vertex1) || this.isInvalid(vertex2)) {
            throw Error('index are out of bonds')
        }
        this.matrix[vertex1][vertex2] = 0
        this.matrix[vertex2][vertex1] = 0
    }
    isInvalid(vertex) {
        return vertex < 0 || vertex >= this.size;
    }

    isConnected(vertex1, vertex2) {
        return this.matrix[vertex1][vertex2] !== 0
    }

    resize(vertex) {
        if (vertex < this.size) return

        let newSize = vertex + 1
        for (let i = 0; i < this.size; i++) {
            this.matrix[i] = [...this.matrix[i], ...new Array(newSize - this.size).fill(0)]
        }
        for (let i = this.size; i < newSize; i++) {
            this.matrix.push(new Array(newSize).fill(0))
        }
        this.size = newSize
    }
}

const newG = new Graph();
newG.addEdge(2,4)
newG.addEdge(1,4)
newG.addEdge(1,7)
newG.addEdge(2,3)
newG.addEdge(3,6)
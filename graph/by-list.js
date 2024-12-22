const traversal = require("./graph-traversal")

class GraphList {
    constructor() {
        this.list = new Map()
    }

    addVertex(vertex) {
        if (!this.list.has(vertex)) {
            this.list.set(vertex, new Set())
        }
    }
    addEdge(vertex1, vertex2) {

        if (!this.list.has(vertex1)) {
            this.addVertex(vertex1);
        }

        if (!this.list.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.list.get(vertex1).add(vertex2);
        this.list.get(vertex2).add(vertex1);

    }

    removeEdge(vertex1, vertex2) {

        if (!this.list.has(vertex1) || !this.list.has(vertex2)) {
            return
        }
        this.list.get(vertex1).delete(vertex2)
        this.list.get(vertex2).delete(vertex1)
    }
    removeVertex(vertex) {
        if (this.list.has(vertex)) {
            for (let neighbor of this.list.get(vertex)) {
                this.list.get(neighbor).delete(vertex);
            }
            this.list.delete(vertex);
        }
    };

    printGraph() {
        for (let [vertex, edges] of this.list) {
            console.log(`${vertex} -> ${[...edges].join(', ')}`);
        }
    }

}

const graph = new GraphList();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

traversal.dfs(graph.list, 'C')
console.log('-------------')
traversal.rDFS(graph.list, 'C')
console.log('-------------')
traversal.bfs(graph.list, 'C')
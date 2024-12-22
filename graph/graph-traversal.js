function bfs(graph, start) {
    if (!graph || !graph.get(start)) {
        return
    }

    const visited = new Set()
    const queue = [start]
    visited.add(start)

    while (queue.length) {
        const current = queue.shift()
        console.log(current);
        for (let neighbor of graph.get(current)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor)
            }
        }
    }


}

function dfs(graph, start) {

    if (!graph || !graph.has(start)) return

    const stack = [start] //starting vertex
    const visited = new Set();
    visited.add(start);

    while (stack.length) {
        const curr = stack.pop()
        console.log(curr)
        for (let neighbor of graph.get(curr)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor)
            }
        }
    }
}

function rDFS(graph, start, visited = new Set()) {
    if (!graph.has(start)) {
        return
    }
    visited.add(start)
    console.log(start)
    for (let neighbor of graph.get(start)) {
        if (!visited.has(neighbor)) {
            rDFS(graph, neighbor, visited)
        }
    }
}


module.exports = {
    bfs, dfs, rDFS
}

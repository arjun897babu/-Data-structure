# Recursion

**Recursion** is a process where a function calls itself directly or indirectly to solve a problem. Where a problem is solved by breaking it into smaller, more manageable sub-problems of the same type.

## Parts of a Recursive Function

- `Base Case`: A condition under which the recursion stops. Without a base case, the recursion will continue indefinitely, leading to a stack overflow.
- `Recursive Case`: The part of the function where the function calls itself to work towards the base case.

## Types of Recursion

- `1.Direct Recursion` :A function directly calls itself
- `2.In-Direct Recursion` :A function calls another function, which eventually calls the first function again.
- `3.Tail Recursion` :A special form of recursion where the recursive call is the last operation in the function.
- `4.Head Recursion` :The recursive call occurs before any processing.

##  Stack Overflow
`A stack overflow occurs when the call stack exceeds its allocated limit. This usually happens when a program has excessive nested function calls, such as in infinite recursion or very deep recursion (too many recursive calls before reaching the base case)`

**`call stack`**  is a special area of memory used to manage function calls during program execution. *`It keeps track of function call information`*  (e.g., return address, local variables). *`Order of execution`* (which function called which, and in what order)

*`Each time a function is called , Its information is pushed onto the stack.
When the function completes, its information is popped off the stack.`*

# Advantages 

- Recursive solutions often have cleaner, more intuitive code for problems like tree traversal, Fibonacci sequences, or divide-and-conquer algorithms.
- Many problems, such as tree-based problems or fractals, are inherently recursive and are easier to solve recursively.
-Recursive solutions avoid loops and complex manual stack management.

# Drawbacks

- Excessive recursion can lead to a stack overflow error if the recursion depth exceeds the system limit.

- Each recursive call adds a new stack frame, which increases memory usage. Deep recursion is less space-efficient compared to iteration.
 
- Recursive function calls are slower due to the overhead of maintaining the call stack.
 
- Debugging recursive code can be harder, as it may not be immediately clear how the recursive calls interact.

# Applications of Recursion

1. Mathematical Computations

2. Divide and Conquer Algorithms

3. Tree and Graph Traversals

4. Backtracking Algorithms

5. Fractal Generation

6. Game Development

7. Data Parsing: Recursive functions help parse nested structures like JSON, XML, or HTML.

8. Compiler Design: Recursive Descent Parsing is used to implement syntax analyzers.

9. Web Development: DOM tree traversal in JavaScript often uses recursion.

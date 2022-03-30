class Stack<T> {
    private stack: Array<T>
    private count: number
    constructor() {
       this.stack = []
       this.count = 0
    }

    isEmpty(): boolean {
        return this.count == 0 ? true: false
    }

    push(item: any): void {
        this.stack.push(item)
        this.count++
    }

    pop(): void | undefined {
        if(this.count == 0) return undefined 
        this.stack.shift()
    }

    peek(): T {
        return this.stack[this.count - 1]
    }
}


const stack = new Stack()

console.log(
    `Is empty?: ${stack.isEmpty()}`
)

stack.push(1)
stack.push('this')
stack.push(true)

console.log(stack.peek())
stack.pop()
console.log(stack.peek())


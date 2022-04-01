class Queue<T>{
    private queue: Array<T>
    length: number
    constructor() {
        this.queue = []
        this.length = 0
    }

    isEmpty() {
        return this.length > 0 ? true : false
    }

    enqueue(item: T) {
        this.queue.unshift(item)
        this.length++
    }

    dequeue() {
        this.queue.pop()
        this.length--
    }


   
}



const queue = new Queue<number>()

console.log(`${queue.isEmpty()} Is empty?`)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(`${queue.length}`)

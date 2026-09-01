class CircularQueue {
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(element){
        if(this.isFull()){
            console.log("cant add elements as queue is already full")
            return false
        }

        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = element
        this.currentLength += 1

        if (this.front === -1) {
        this.front = this.rear;
      }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1
        }

        return item
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.items[this.front]
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty.")
            return
        }
        let curr = this.front
        let str = ""

        for(let i = 0; i < this.currentLength; i++){
            str += this.items[curr] + " "
            curr = (curr + 1) % this.capacity
        }

      console.log(str);
    }


}

const queue = new CircularQueue(5)
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())
queue.print()
queue.enqueue(60)
queue.print()
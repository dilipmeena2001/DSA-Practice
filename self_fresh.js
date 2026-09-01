class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++
    }

    dequeue(){
        if(this.isEmpty()){
            return "No items available to remove"
        }
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    peek(){
        if(this.isEmpty()){
            return "No items available to peek"
        }
        return this.items[this.front]
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
        console.log(this.items) // for a better personal visualisation of queue
    }
}

let q1 = new Queue()
console.log(q1.isEmpty())
q1.enqueue("Hello")
q1.enqueue("World")
q1.enqueue("Dilip")
q1.dequeue()
console.log(q1.peek())
q1.print()

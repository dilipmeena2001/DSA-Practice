function createStack(elements) {
  const items = [...elements];

  const isEmpty = () => !items.length;

  return {
    push(element) {
      items.push(element);
    },
    pop() {
      if (isEmpty()) return "No elements to remove";
      return items.pop();
    },
    peek() {
      if (isEmpty()) return "Stack is empty";
      return items[items.length - 1];
    },
    isEmpty,
    clear() {
      items.length = 0;
    },
    size() {
      return items.length;
    },
  };
}

const fruits = createStack(["mango", "banana", "chilli"]);

const cars = createStack(["Dzire", "Scorpio-N"])

fruits.pop();
fruits.push("Pineapple");

console.log(fruits.size());
console.log(cars.size());


function createStack() {
  const items = [];
  
  function isEmpty() {
    return items.length === 0;
  }

  return {
    push(element) {
      items.push(element);
    },
    pop() {
      if (isEmpty()) {
        return "Underflow: Stack is empty";
      }
      return items.pop();
    },
    peek() {
      if (isEmpty()) {
        return "Stack is empty";
      }
      return items[items.length - 1];
    },
    isEmpty,
    size() {
      return items.length;
    },
    clear() {
      items.length = 0;
    }
  };
}

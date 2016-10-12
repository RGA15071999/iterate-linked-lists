class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  length() {
    let pointer = this.next;
    let count = 1;
    while(pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  append(element) {
    let pointer = this;
    while(pointer.next !== null) {
      pointer = pointer.next;
    }
    let new_node = new Node(element);
    pointer.next = new_node;
  }

  prepend(element) {
    this.append(element);
    let pointer = this;
    let next_item = pointer.data;
    let buffer = pointer.data
    while(pointer.next !== null) {
      buffer = next_item;
      next_item = pointer.next.data;
      pointer.next.data = buffer;
      pointer = pointer.next
    }
    this.data = element;
  }
};

let list = new Node('1');
list.prepend('2');
list.prepend('3');
list.prepend('4');
console.log(list);

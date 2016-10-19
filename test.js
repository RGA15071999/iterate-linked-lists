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
    let new_element = new Node(this.data);
    new_element.next = this.next;
    this.data = element;
    this.next = new_element;
  }

  reverse() {
    let new_list = new Node(this.data);
    let iter = this;
    while(iter.next) {
      new_list.prepend(iter.next.data);
      iter = iter.next;
    }

    return new_list;
  }
};

let list = new Node('1');
list.prepend('2');
list.prepend('3');
list.prepend('4');
console.log(list.reverse());

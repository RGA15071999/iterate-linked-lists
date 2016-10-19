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

  get(index) {
    let pointer = this;
    let currentIndex = 0;
    while(pointer.next !== null) {
      if(currentIndex === index) {
        return pointer.data
      }
      pointer = pointer.next;
      currentIndex++;
    }
  }
};

const listOf = function(array) {
  let linkedList = new Node(array[0]);
  for(let i = 1; i < array.length; i++) {
    linkedList.append(array[i]);
  }
  return linkedList;
}

const a = listOf([1,2,'a',4]);
console.log(linkedList.length());

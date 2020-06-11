'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = new _Node(item, null);
  }

  remove(item) {
    let node = this.head;
    let previousNode = null;
    while (node.value !== item) {
      if(node.next === null) {
        //if value is not in the linked list
        console.log('Sorry try another value');
        return null;
      }
      previousNode = node;
      node = node.next;
    }
    previousNode.next = node.next;
  }

  find(item) {
    let node = this.head;
    while (node.value !== item) {
      node = node.next;

      if (node.value === item) {
        return node;
      }
    }

    return null;
  }

  insertBefore(item, key) {
    let node = this.head;
    let prevNode = null;
    while(node.value !== key) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = new _Node(item, node);
  }

  insertAfter(item, key) {
    let node = this.head;
    while(node.value !== key) {
      node = node.next;
    }
    node.next = new _Node(item, node.next);
  }

  insertAt(item, index) {
    let node = this.head;
    for(let i = 1; i < index; i++) {
      node = node.next;
    }
    node.next = new _Node(item, node.next);
  }

  printAllNodes() {
    let node = this.head;
    console.log('First node: ', this.head);
    while (node !== null) {
      console.log('Node next= ', node.next);
      node = node.next;
    }
  }
}

function main() {
  const SSL = new LinkedList();
  SSL.insertFirst('Appolo');
  SSL.insertLast('Boomer');
  SSL.insertAt('Test', 1);
  SSL.printAllNodes();


}

main();

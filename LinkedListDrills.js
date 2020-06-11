class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class _DLLNode {
  constructor(value, next, back) {
    this.value = value;
    this.next = next;
    this.back = back;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _DLLNode(item, this.head, null);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new _DLLNode(item, null, node);
  }

  insertBefore(item, key) {
    let node = this.head;
    let prevNode = null;
    while (node.value !== key) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = new _DLLNode(item, prevNode.next, prevNode);
  }

  insertAfter(item, key) {
    let node = this.head;
    while (node.value !== key) {
      node = node.next;
    }
    node.next = new _DLLNode(item, node.next, node.back);
  }

  insertAt(item, index) {
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    node.next = new _DLLNode(item, node.next, node.back);
  }

  remove(item) {
    let node = this.head;
    let previousNode = null;
    while (node.value !== item) {
      if (node.next === null) {
        //if value is not in the linked list
        console.log("Sorry try another value");
        return null;
      }
      previousNode = node;
      node = node.next;
    }
    previousNode.next = node.next;
    node.next.back = previousNode;
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

  printAllNodes() {
    let node = this.head;
    while (node !== null) {
      console.log("Node: ", node);
      node = node.next;
    }
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

    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }

    node.next = new _Node(item, null);
  }

  remove(item) {
    let node = this.head;
    let previousNode = null;
    while (node.value !== item) {
      if (node.next === null) {
        //if value is not in the linked list
        console.log("Sorry try another value");
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
    while (node.value !== key) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = new _Node(item, node);
  }

  insertAfter(item, key) {
    let node = this.head;
    while (node.value !== key) {
      node = node.next;
    }
    node.next = new _Node(item, node.next);
  }

  insertAt(item, index) {
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    node.next = new _Node(item, node.next);
  }

  printAllNodes() {
    let node = this.head;
    console.log("First node: ", this.head);
    while (node !== null) {
      console.log("Node next= ", node.next);
      node = node.next;
    }
  }

  size() {
    let i = 0;
    let node = this.head;
    while (node !== null) {
      node = node.next;
      i++;
    }
    return i;
  }

  isEmpty() {
    return this.head ? false : true;
  }

  findPrevious(item) {
    let node = this.head;
    let prevNode = null;
    while (node.value !== item) {
      prevNode = node;
      node = node.next;
    }
    return prevNode;
  }

  findLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  recursiveReverse(node = this.head, prevNode = null) {
    if (!node) {
      this.head = prevNode;
      return node;
    }

    const nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    this.recursiveReverse(nextNode, prevNode);
  }

  thirdFromTheEnd() {
    let node = this.head;
    let thirdLast = null;

    while (node.next !== null && node.next.next !== null) {
      thirdLast = node;
      node = node.next;
    }
    return thirdLast;
  }

  findMiddle() {
    let node = this.head;
    let counter = 0;
    let middleNode = null;
    while (node !== null) {
      counter++;
      node = node.next;
    }
    node = this.head;
    for (let i = 0; i < counter / 2; i++) {
      middleNode = node;
      node = node.next;
    }
    return middleNode;
  }
  // cycleCheck() {
  //   let node = this.head;
  //   let otherNode = this.head;

  //   while()
  // }

  middleOfList(node = this.head, count = 1) {
    if (!node.next) {
      return count / 2;
    }

    let midCheck = this.middleOfList(node.next, count + 1);
    if (count === midCheck) {
      return count;
    } else {
      return midCheck;
    }
  }
}

function reverse(SSL) {
  let node = SSL.head;
  let prevNode = null;
  let nextNode = null;
  while (node) {
    nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    if (!nextNode) {
      break;
    }
  }
  SSL.head = node;
  return SSL;
}

function main() {
  const SSL = new DoublyLinkedList();
  SSL.insertFirst(1);
  SSL.insertLast(2);
  SSL.insertBefore(3, 2);
  SSL.insertAfter(1.5, 1);
  SSL.insertAt(10000, 2);
  SSL.printAllNodes();

  // SSL.remove(;
  // SSL.find(7);

  // console.log(SSL.findMiddle());

  // console.log("TESTING", SSL.middleOfList());

  // console.log(SSL.thirdFromTheEnd());
  // console.log("TESTING", SSL.printAllNodes());
}

main();

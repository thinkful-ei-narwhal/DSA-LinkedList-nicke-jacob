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

  printAllNodes() {
    let node = this.head;
    console.log("First node: ", this.head);
    while (node !== null) {
      console.log("Node next= ", node.next);
      node = node.next;
    }
  }
}

function main() {
  const linky = new LinkedList();
  // linky.insertFirst("test");
  // linky.insertFirst("brain");
  // linky.insertFirst("buns");
  // linky.insertFirst("lovehandles");

  // linky.insertLast("test");
  // linky.insertLast("brain");
  // linky.insertLast("buns");
  // linky.insertLast("lovehandles");

  // linky.remove("buns");

  // console.log("TESTING", linky.find("buns"));

  // linky.printAllNodes();
}

main();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;
    let prev = temp;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    prev.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    temp.next = null;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) return this.unshift(value);

    if (index === this.length) return this.push(value);

    const temp = this.get(index - 1);
    const newNode = new Node(value);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const cur = prev.next;

    prev.next = cur.next;
    cur.next = null;

    this.length--;

    return cur;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let pre = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;

      pre = temp;
      temp = next;
    }

    return this;
  }
}

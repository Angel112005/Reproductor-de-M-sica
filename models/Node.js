export class Node {
  #data
  #prev
  #next

  constructor(data) {
    this.#data = data;
    this.prev = null;
    this.next = null;
  }

  getData () {
    return this.#data
}

}
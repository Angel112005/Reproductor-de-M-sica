import { Node } from "./Node.js";

export class CircularDoubleLinkedList {
  constructor() {
    this.current = null;
    this.size = 0; 
  }

  agregarCancion(cancion) {
    const nuevoNodo = new Node(cancion);
    if (!this.current) {
      nuevoNodo.next = nuevoNodo;
      nuevoNodo.prev = nuevoNodo;
      this.current = nuevoNodo;
    } else {
      const ultimoNodo = this.current.prev;
      nuevoNodo.next = this.current;
      nuevoNodo.prev = ultimoNodo;
      this.current.prev = nuevoNodo;
      ultimoNodo.next = nuevoNodo;
    }
    this.size++;
  }

  reproducir() {
    if (this.current) {
      console.log("Reproduciendo:", this.current.getData());
    }
  }

  siguiente() {
    if (this.current) {
      this.current = this.current.next;
      this.reproducir();
    }
  }

  anterior() {
    if (this.current) {
      this.current = this.current.prev;
      this.reproducir();
    }
  }

  obtenerCancionActual() {
    if (this.current)
      return this.current
  }

}

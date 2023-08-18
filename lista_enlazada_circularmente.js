class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Insertar un elemento al final de la lista circular
    insertar(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        newNode.next = newNode;
        this.head = newNode;
      } else {
        newNode.next = this.head.next;
        this.head.next = newNode;
      }
  
      this.length++;
    }
  
    // Buscar un elemento y devolver la posición del nodo
    localizar(data) {
      if (!this.head) {
        return null;
      }
  
      let current = this.head;
      do {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      } while (current !== this.head);
  
      return null;
    }
  
    // Borrar un elemento de la lista
    borrar(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        if (this.head === this.head.next) {
          this.head = null;
        } else {
          const lastNode = this.head;
          while (lastNode.next !== this.head) {
            lastNode = lastNode.next;
          }
          lastNode.next = this.head.next;
          this.head = this.head.next;
        }
        this.length--;
        return;
      }
  
      let prev = this.head;
      let current = this.head.next;
      while (current !== this.head) {
        if (current.data === data) {
          prev.next = current.next;
          this.length--;
          return;
        }
        prev = current;
        current = current.next;
      }
    }
  
    // Obtener el siguiente nodo en la lista circular
    siguiente(nodo) {
      if (!nodo || !this.head) {
        return null;
      }
      return nodo.next;
    }
  }
  
  // Ejemplo de uso
  const listaCircular = new CircularLinkedList();
  listaCircular.insertar(10);
  listaCircular.insertar(20);
  listaCircular.insertar(30);
  
  const nodo20 = listaCircular.localizar(20);
  console.log("Nodo con valor 20:", nodo20);
  
  listaCircular.borrar(20);
  console.log("Lista después de borrar 20:");
  let current = listaCircular.head;
  do {
    console.log(current.data);
    current = current.next;
  } while (current !== listaCircular.head);
  
  const siguienteNodo = listaCircular.siguiente(nodo20);
  console.log("Siguiente nodo después de 20:", siguienteNodo);
  
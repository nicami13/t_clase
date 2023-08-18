// Definición de la clase Nodo
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Definición de la clase ListaDoblementeEnlazada
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Crear una nueva instancia de la lista
    static crear() {
      return new DoublyLinkedList();
    }
  
    // Destruir la lista (liberar memoria, etc.)
    destruir() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Obtener la primera posición en la lista
    primero() {
      return this.head;
    }
  
    // Obtener la última posición en la lista
    fin() {
      return this.tail;
    }
  
    // Insertar un elemento en una posición dada
    insertar(x, p) {
      const newNode = new Node(x);
  
      if (!this.head || p === this.head) {
        newNode.next = this.head;
        if (this.head) this.head.prev = newNode;
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
      } else if (!p) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      } else {
        newNode.next = p.next;
        newNode.prev = p;
        if (p.next) p.next.prev = newNode;
        p.next = newNode;
      }
  
      this.length++;
    }
  
    // Borrar el elemento en una posición dada
    borrar(p) {
      if (!p) return;
  
      if (p === this.head) {
        this.head = p.next;
        if (p.next) p.next.prev = null;
        if (p === this.tail) this.tail = null;
      } else if (p === this.tail) {
        this.tail = p.prev;
        p.prev.next = null;
      } else {
        p.prev.next = p.next;
        p.next.prev = p.prev;
      }
  
      this.length--;
    }
  
    // Obtener el elemento en una posición dada
    elemento(p) {
      return p ? p.data : null;
    }
  
    // Obtener la posición siguiente a una dada
    siguiente(p) {
      return p ? p.next : null;
    }
  
    // Obtener la posición anterior a una dada
    anterior(p) {
      return p ? p.prev : null;
    }
  
    // Obtener la posición de un elemento dado
    posicion(x) {
      let current = this.head;
      while (current) {
        if (current.data === x) return current;
        current = current.next;
      }
      return null;
    }
  }
  
  // Ejemplo de uso
  const lista = DoublyLinkedList.crear();
  const p1 = lista.primero();
  const p2 = lista.fin();
  lista.insertar(10, p1);
  lista.insertar(20, p2);
  console.log("Elemento en p1:", lista.elemento(p1));
  console.log("Elemento en p2:", lista.elemento(p2));
  console.log("Elemento siguiente a p1:", lista.elemento(lista.siguiente(p1)));
  console.log("Elemento anterior a p2:", lista.elemento(lista.anterior(p2)));
  
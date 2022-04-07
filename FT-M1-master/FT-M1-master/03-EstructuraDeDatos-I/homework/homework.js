'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  // la recursividad es invocar una funcion que se llama a si misma un y otra ves hasta que se cumple una condicion, necesita una condición de parada para evitar un bucle infinito
  if (n<=1) return 1
  else (n<2);  
  return n * nFactorial(n - 1)
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  // la funcion fibonacci es una cadena de numeros, que empiezan siempre en 0 y 1, para definir el siguiente numero debemos sumar los 2 anteriores, ejemplo //0, 1, aca el siguiente numero es la suma de 0 y 1 eso nos da 1 y queda  //0, 1, 1... ahora el siguiente numero sera la suma de los dos anteriores o sea 1 y 1, // 0, 1, 1, 2... el siguiente nuevamente es la suma de los dos anteriores, 2 y 1, entonces // 0, 1, 1, 2, 3, 5, 8..... y asi infinitamente, si queremos acceder al numero n, ese numero seria el mismo mas la suma de su valor-1 y su valor-2 
  //n = n-1 + n-2 siempre  cuando sea mayor a 0 

  if (n<2) return n
  else (n>2)
  return nFibonacci(n-1) + nFibonacci(n-2) 
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
this.queue = []
}

Queue.prototype.enqueue = function(item){
  this.queue.push(item)}
Queue.prototype.dequeue = function(){
  return this.queue.shift()}
Queue.prototype.size = function(){
  return this.queue.length}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};

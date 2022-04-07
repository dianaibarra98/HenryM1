'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  //factorear un numero es hacer la division por los primos 
  // ejemplo con 180 
  // 180/2 =90
  // 90/2 = 45
  // 45/3= 15
  // 15/3= 5
  // 5/5= 1
  // 180 = 1 *2 *2 *3 *3 *5 el 1 siempre va a estar
   // este ejercicio es O(n)


  let array = [1]
  let divisor = 2; 
  while ( num > 1){
    if (num % divisor === 0){
      array.push(divisor);
      num = num/divisor
    }else{
      divisor++
    }
  }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //este lo que hace es ir comparando cada elemento con el siguiente, y preguntar cual de ellos es mayor, si el siguiente es mayor que el primero, los suichea y pasa al siguiente  y se lleva el mas grande hasta el final [ 1,7,14,25,19,2,35,3,7,9]
  let swap = true
  while(swap){
    swap = false
    for (let i = 0; i < array.length; i++){
      if (array[i] > array [i+1]){
        let aux = array[i];
        array[i] = array[i+1]; 
        array[i+1] = aux; 
        swap = true; 
      }
    } 
  } 
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i <= array.length; i++){
    let j = i; 
    while (j >= 1 && array[j] < array[j-1]){
      let aux = array[j];
      array[j] = array[j-1];
      array[j-1] = aux;
      j--
    }
  }
return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++){
    let min= array[i];
    let current = i; 
    for (let j=i+1; j<array.length; j++){
      if (min>array[j]){
        min= array[j]
        current= j
      }
    }
    if(current!== i){
      array[current]= array[i]
      array[i]= min
    }
  }
 
return array 

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

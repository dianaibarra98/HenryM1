'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
//   let pivot = Math.floor(Math.random() * array.length)
//   let rightArr = []
//   let leftArr= []
//   for(let i =0; i<array.length; i++){
//     if (array[i]!==pivot){
//       if (array[i]>pivot){
//     rightArr.push(array[i])
//   }else{
//     leftArr.push(array[i])

//    }
//   }
// }
// leftArr = quickSort(leftArr)
// rightArr = quickSort(rightArr)
// return leftArr.concat(pivot).concat(rightArr)
// }
  if (array.length === 0){
    return[]}
  let mediumI= Math.floor(array.length /2); 
  let pivot= array[mediumI]; 
  let leftArr = []
  let rightArr = []
  for ( let i = 0; i < array.length; i++){
    if(i!= mediumI){
      if(array[i] > pivot){
        rightArr.push(array[i])
      }else{
        leftArr.push(array[i])
      }
    }
  }
  leftArr = quickSort(leftArr)
  rightArr = quickSort(rightArr)
  return leftArr.concat(pivot).concat(rightArr)
  }


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

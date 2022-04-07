'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length <=1) return array
  
  let pivot = Math.floor(Math.random() * array.length)
  let rightArr = []
  let leftArr= []
  for(let i =0; i<array.length; i++){
    if (i!==pivot){
      if (array[i]>array[pivot]) rightArr.push(array[i])
  else leftArr.push(array[i])
   }
  }
leftArr = quickSort(leftArr)
rightArr = quickSort(rightArr)
return leftArr.concat(array[pivot]).concat(rightArr)
}
  // if (array.length === 0){
  //   return[]}
  // let mediumI= Math.floor(array.length /2); 
  // let pivot= array[mediumI]; 
  // let leftArr = []
  // let rightArr = []
  // for ( let i = 0; i < array.length; i++){
  //   if(i!= mediumI){
  //     if(array[i] > pivot){
  //       rightArr.push(array[i])
  //     }else{
  //       leftArr.push(array[i])
  //     }
  //   }
  // }
  // leftArr = quickSort(leftArr)
  // rightArr = quickSort(rightArr)
  // return leftArr.concat(pivot).concat(rightArr)
  // }


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //slice=coge un arreglo y lo parte segun le pidamos, [2,4,8,6,7].slice(3)= 2, 4, 8 nos retorna solo lo que nos pedimos, en este caso nos devuelve los primeros 3 indices del array contando 
  if (array.length===1) return array
  let half= Math.floor (array.length/2)
  let left = array.slice(0, half)
  let right= array.slice(half)


  return merge(mergeSort(left),mergeSort(right))
}
function merge(left, right){
  let result = []
  let indexLeft= 0
  let indexRigth =0
  while (indexLeft < left.length && indexRigth < right.length){
    if(left[indexLeft]<right[indexRigth]){
      result.push(left[indexLeft])
      indexLeft++
    }else{
      result.push(right[indexRigth])
      indexRigth++
    }
  }
  return result.concat(left.slice(indexLeft), right.slice(indexRigth))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 let dec=0
 for (let i = num.length -1; i >= 0; i --){
   dec += 2**i*num[num.length-1-i]
 }
 return dec
}

function DecimalABinario(num) {
  // tu codigo aca
var res= ""; 
while (num >0){
  res = num %2 + res;
  num = Math.floor (num/2) 
}
return res; 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
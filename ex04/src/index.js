function compareDifferenValues(m, n) {


   if (m === n) {
      
      return "Equal"; 
      
  
    } else {
      return "Not equal" ;
      
   }



}

console.log(compareDifferenValues(8, "8"));
console.log(compareDifferenValues("8", 8));
console.log(compareDifferenValues('8', 8));
console.log(compareDifferenValues("8", "8"));
console.log(compareDifferenValues(8, 8));


module.exports = compareDifferenValues;
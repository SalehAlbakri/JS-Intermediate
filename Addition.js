// Code:
// for (let i=200; i<=2700; i++) {
//   if (i%3===0) {
//     if (i%5===0) {
//     } else console.log (i);
//   } else if (i%5===0){
//     console.log (i);
//   }
// }

// Code:
var Add=0;
for (let i=200; i<=2700; i++) {
  if ((i%3===0 || i%5===0) && !(i%3===0 && i%5===0)) {
    Add +=i;
  }
} 
console.log ('Total=',Add);
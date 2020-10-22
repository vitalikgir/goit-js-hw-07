const stars = 2;
let price;

/*  if (stars === 1 || stars === 2 ) {
  price = 20;

} else if (stars === 3 || stars === 4) {
  price = 50;

} else if (stars === 5) {
  price = 120;
} else {
  console.log('такого нет');
} 

 */

switch (stars) {
  case 1:
     case 2:
    price = 20;
    break;
 
    
  case 3:
    case 4:
    price = 40;
    break;
  
    
  case 5:
    price = 120;
    break;

  default:
    console.log('такого нет');
}
 
console.log(price);

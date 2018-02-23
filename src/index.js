module.exports = function getZerosCount(number) {
  /*var zeroes = 0;
  var poweredFive = 5; 
  var i = 1;
  
  while(number/poweredFive > 1) {
    zeroes += (number - number % poweredFive) / poweredFive;
    poweredFive = Math.pow(5, ++i);
  }
  return zeroes;*/

  var zeroes = 0;
  var base = 10;
  var primerArray = [];
  var primer = 2;
  var restBase = base;
  var isPrimer = true;
  while(primer <= base) {
    primerArray.forEach(element => {
        if((primer % element) == 0) {
          isPrimer = false;
        }
    });
    if(isPrimer && (restBase%primer == 0)) {
      primerArray.push(primer);
    }
    isPrimer = true;
    primer++;    
  }
  primer = primerArray.pop();
  
  while(number/primer > 1) {
    zeroes += (number - number % primer) / primer;
    number /= primer;
  }
  
  return zeroes;
}

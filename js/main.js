function getRandomInt(minNumber, maxNumber) {
  if (minNumber >= 0 && minNumber < maxNumber ){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) +minNumber;
  }
  throw new Error('Invalid numbers');
}
getRandomInt(10, 90);


function getRandomFloat(minNumber, maxNumber, numberOfDecimal) {

  if (minNumber >= 0 && minNumber <= maxNumber){
    return (Math.random() * (maxNumber - minNumber + 1) + minNumber).toFixed(numberOfDecimal);
  }
  throw new Error('Invalid numbers');
}
getRandomFloat(3, 90, 3);

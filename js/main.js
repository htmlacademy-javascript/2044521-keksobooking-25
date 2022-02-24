//Функция возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInt(minNum, maxNum) {
  if (minNum >= 0 && minNum<maxNum ){
    return Math.floor(Math.random() * (maxNum - minNum + 1)) +minNum;
  } else {
    console.log ('Invalid numbers');
  }

}
getRandomInt();

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat(minNum, maxNum) {
  if (minNum >= 0 && minNum <= maxNum){
    return Math.random() * (maxNum - minNum + 1) + minNum;
  } else {
    console.log ('Invalid numbers');
  }
}


getRandomFloat().toFixed();

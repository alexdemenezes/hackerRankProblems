function birthdayCakeCandles(candles) {
  let result  = 1;
  let biggestCandle = 0;
  
  for (let i = 0; i < candles.length; i++) {
    
    if (candles[i] === biggestCandle) result ++;

    if (candles[i] > biggestCandle) {
      biggestCandle = candles[i];
      result = 1;
    }

  }

  return result;
}

console.log(birthdayCakeCandles([3, 1, 2, 3]));
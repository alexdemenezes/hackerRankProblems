 const array = [1, 2, 3, 4, 5];


function miniMaxSum(arr) {
  let biggestNumberIndex = 0 ;
  let lowestNumberIndex = 0;
  
  for (let i = 0; i < arr.length; i += 1) {       
     if (arr[i] > arr[biggestNumberIndex]) biggestNumberIndex = i;
     if (arr[i] < arr[lowestNumberIndex]) lowestNumberIndex = i;
  }
  console.log(biggestNumberIndex, lowestNumberIndex);

  
  const max = sumMax(arr, lowestNumberIndex);
  const min = sumMin(arr, biggestNumberIndex);
  
  console.log(min, max);
  
}

function sumMax(arr, lowestNumbeIndex) {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
      if (i !== lowestNumbeIndex) {
          result += arr[i];
      }
  }
  
  return result;
  
}

function sumMin(arr, biggestNumberIndex) {
  
  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
      if (i !== biggestNumberIndex) {
          result += arr[i];
      }
  }
  
  return result;
  
}


miniMaxSum(array);
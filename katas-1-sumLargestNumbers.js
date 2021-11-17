const sumLargestNumbers = function(data) {
  // First sort the arrays in ascending order
  for (let i = 0; i <= data.length; i++){
    for ( let j = 0; j < data.length - 1; j++){
      if (data [j + 1] < data[j]){
        [data[j], data[j+1]] = [data[j+1], data[j]];
      }
    }
  } 
  
  // Now add the last two elements of the new sorted array
  for (let k = 0; k <= data.length; k++){
    return data[data.length - 1] + data[data.length - 2];
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
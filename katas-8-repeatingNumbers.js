const repeatNumbers = function(data) {
  // Now we create a variable to store the repeated result as string so it doesnt add the repeating number

  let result = "";
  
  // Now we loop through the data and repeat the number, considering the fact that its a nested array, so we have to write two loops
  
  for (i = 0; i < data.length; i++) { // This will take care of the whole data array
    for (j = 0; j < data[i][1]; j++) { // This will take care of the subsequent nested arrays, knowing data at position [1] is the number of times to repeat the data at position [0]
      result += data[i][0]; // remember data at position [0] is the number we want to repeat
    }
    if (i < data.length - 1){ // this will seperate the result of each array by a comma sign and not add a comma to the last result bcos of the (data.length - 1)
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
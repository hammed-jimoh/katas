const conditionalSum = function(values, condition) {
  // First we check the condition.
  // Then loop through the array and find the values that satisfies the condition.
  // Add the values that pass the condition into a new variable created, evenSum and oddSum.
  let evenSum = 0;
  let oddSum = 0;
  if (condition === "even"){
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 === 0){
        evenSum += values[i]
      };
    }
    return evenSum;
  } 
  else if (condition === "odd"){
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 !== 0){
        oddSum += values[i]
      };
    }
    return oddSum;
  }
  
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
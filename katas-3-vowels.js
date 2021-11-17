const numberOfVowels = function(data) {
  // First we loop through the data and find the values that satisfies the condition.
  // Add the values that pass the condition into a new variable created, count.
  let count = 0;
  for (let k = 0; k < data.length; k++){
    if (data[k] === "a" || data[k] === "e" || data[k]=== "i" || data[k]=== "o" || data[k]=== "u"){
      count += 1
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
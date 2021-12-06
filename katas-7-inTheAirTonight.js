const checkAir = function (samples, threshold) {
  // declare a variable to keep track of how many dirty samples there are in the samples
  let dirtySamples = 0
  for (let i = 0; i < samples.length; i++){
    if (samples[i] === "dirty"){
      dirtySamples += 1;
    }
  }
   
  //comparing the dirty samples to the threshold

  if ((dirtySamples / samples.length) > threshold){
    return "Polluted";
  }
  else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
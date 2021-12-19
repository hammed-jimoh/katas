const urlEncode = function(text) {
  let newText = "" // we first create a variable to store the chnaged text
  for (let i = 0; i < text.length; i ++){
    if (text[i] === " ") {
      if (i !== 0 && i !== text.length - 1) { // this will prevent replacing spaces in the beginning or the end of the text with %20
        newText += "%20"
      }
    } 
    else { // if the text isnt a space, return the original text
      newText += text[i]
    }
  }
  return newText
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
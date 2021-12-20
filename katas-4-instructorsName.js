const instructorWithLongestName = function(instructors) {
  // first we create an empty array and put all the instructors names in it and a variable to store the matching instructor's name 
  let names = [];
  let matchedInstructor;
  for (let i = 0; i < instructors.length; i ++){
    names.push(instructors[i]["name"]);
  }

  // now we sort the names in the new NAMES array into descending order

  for (let j = 0; j < names.length; j++){
    for (let k = 0; k < names.length - j - 1; k++){
      if ((names[k+1].length) > (names[k].length)){
        // console.log((names[j+1].length))
        [names[k], names[k+1]] = [names[k+1], names[k]]
      }
    }
  };

  // now we compare the new NAMES array with the instructors array and pick the firsty matching name, since we arranged it so that the longest name will be first item in the NAMES array

  for (let l = 0; l < instructors.length; l++){
    if (instructors[l]["name"] === names[0]){
      matchedInstructor = instructors[l]
    }
  };
  return matchedInstructor
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
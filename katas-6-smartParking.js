const whereCanIPark = function (spots, vehicle) {
  // CAPITAL LETTERS "R"  "S"  "M" means spot is available
  // we loop through the array, as this is an array or arrays (nested array)
  // then we check if the conditions for the type of vehicle is met
 
  for (let y = 0; y < spots.length; y++){
    for (let x = 0; x < spots[y].length; x++){
      const spot = spots[y][x]; // to represent the coordinates of the available spot

      if (vehicle === "regular"){  // regular cars can park in regular (R) spots
        if (spot === "R"){
          return [x, y];
        }
      }
      else if (vehicle === "small"){ // small cars can park in regular (R) spots and small (S) spots
        if (spot === "R" || spot === "S"){
          return [x ,y];
        }
      }
      else if (vehicle === "motorcycle"){ // motocycles can park in regular (R) spots, small (S) spots and motocycle (M) spots
        if (spot === "R" || spot === "S" || spot === "M"){
          return [x, y];
        }
      }
    }
  }
  return false; // if no spots are availabe for parking
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
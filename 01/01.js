// Part Two

const fs = require("fs");

fs.readFile("01-input.txt", (err, data) => {
  if (err) throw err;

  inputStr = data.toString();

  let input_arr = inputStr.split("\n");

  let calories_per_elf = [];

  let new_calories = 0;

  for (let i = 0; i < input_arr.length; i++) {
    if (input_arr[i] !== "") {
      new_calories = new_calories + Number(input_arr[i]);
    } else {
      calories_per_elf.push(new_calories);
      new_calories = 0;
    }
  }

  calories_per_elf.sort(function (a, b) {
    return b - a;
  });

  console.log(calories_per_elf.slice(0, 3).reduce((a, b) => a + b));
});

// Part One

// const fs = require("fs");

// fs.readFile("01-input.txt", (err, data) => {
//   if (err) throw err;

//   inputStr = data.toString();

//   let input_arr = inputStr.split("\n");

//   let highest_calories = 0;

//   let new_calories = 0;

//   for (let i = 0; i < input_arr.length; i++) {
//     if (input_arr[i] !== "") {
//       new_calories = new_calories + Number(input_arr[i]);
//       if (new_calories >= highest_calories) {
//         highest_calories = new_calories;
//       }
//     } else {
//       new_calories = 0;
//     }
//   }

//   console.log(highest_calories);
// });

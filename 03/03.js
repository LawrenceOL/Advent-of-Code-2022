// Part Two

const fs = require("fs");

fs.readFile("03-input.txt", (err, data) => {
  if (err) throw err;

  inputStr = data.toString();

  let input_arr = inputStr.split("\n");

  let dupsArray = [];

  let prioritesSum = 0;

  let subtractTotal = 0;

  for (let i = 0; i < input_arr.length; i++) {
    if (i === 0 || i % 3 === 0) {
      const elf1Set = new Set();
      const elf2Set = new Set();

      const elf1 = input_arr[i];
      const elf2 = input_arr[i + 1];
      const elf3 = input_arr[i + 2];

      for (let j = 0; j < elf1.length; j++) {
        elf1Set.add(elf1[j]);
      }

      for (let j = 0; j < elf2.length; j++) {
        elf2Set.add(elf2[j]);
      }

      for (let j = 0; j < elf3.length; j++) {
        if (elf1Set.has(elf3[j]) && elf2Set.has(elf3[j])) {
          if (elf3[j] === elf3[j].toUpperCase()) {
            prioritesSum = prioritesSum + elf3[j].charCodeAt(0) - 38;

            break;
          } else {
            prioritesSum = prioritesSum + elf3[j].charCodeAt(0) - 96;

            break;
          }
        }
      }
    }

    // const lineSet = new Set();
    // for (let j = 0; j < input_arr[i].length; j++) {
    //   lineSet.add(input_arr[i][j]);
    // }
    // for (let j = input_arr[i].length / 2; j < input_arr[i].length; j++) {
    //   if (lineSet.has(input_arr[i][j])) {
    //     if (input_arr[i][j] === input_arr[i][j].toUpperCase()) {
    //       prioritesSum = prioritesSum + input_arr[i][j].charCodeAt(0) - 38;
    //       break;
    //     } else {
    //       prioritesSum = prioritesSum + input_arr[i][j].charCodeAt(0) - 96;
    //       break;
    //     }
    //   }
    // }
  }

  console.log(prioritesSum);
});

// // Part One
// const fs = require("fs");

// fs.readFile("03-input.txt", (err, data) => {
//   if (err) throw err;

//   inputStr = data.toString();

//   let input_arr = inputStr.split("\n");

//   let dupsArray = [];

//   let prioritesSum = 0;

//   for (let i = 0; i < input_arr.length; i++) {
//     const lineSet = new Set();
//     for (let j = 0; j < input_arr[i].length / 2; j++) {
//       lineSet.add(input_arr[i][j]);
//     }
//     for (let j = input_arr[i].length / 2; j < input_arr[i].length; j++) {
//       if (lineSet.has(input_arr[i][j])) {
//         if (input_arr[i][j] === input_arr[i][j].toUpperCase()) {
//           prioritesSum = prioritesSum + input_arr[i][j].charCodeAt(0) - 38;
//           break;
//         } else {
//           prioritesSum = prioritesSum + input_arr[i][j].charCodeAt(0) - 96;
//           break;
//         }
//       }
//     }
//   }

//   console.log(prioritesSum);
// });

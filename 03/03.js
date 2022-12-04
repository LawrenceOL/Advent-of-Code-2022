const fs = require("fs");

fs.readFile("03-input.txt", (err, data) => {
  if (err) throw err;

  inputStr = data.toString();

  let input_arr = inputStr.split("\n");

  let prioritesSum = 0;

  for (let i = 0; i < input_arr.length; i++) {
    const lineSet = new Set();
    for (let j = 0; j < input_arr[i].length / 2; j++) {
      lineSet.add(input_arr[i][j]);
    }
    for (let j = input_arr[i].length / 2 + 1; j < input_arr[i].length; j++) {
      if (lineSet.has(input_arr[i][j])) {
        if (input_arr[i][j] === input_arr[i][j].toUpperCase()) {
          prioritesSum = prioritesSum + input_arr[i][j].charCodeAt(0) - 38;
          break;
        } else {
          prioritesSum = prioritesSum + input_arr[i][j].charCodeAt(0) - 96;
          break;
        }
      }
    }
  }
  console.log(prioritesSum);
});

// Part Two

// myPlay cheat sheet
// X = I lose
// Y = I draw
// Z = I win

// opponentPlay cheat sheet
// A = Rock
// B = Paper
// C = Scissors

const fs = require("fs");

fs.readFile("02-input.txt", (err, data) => {
  if (err) throw err;

  inputStr = data.toString();

  let input_arr = inputStr.split("\n");

  let totalScore = 0;

  for (let i = 0; i < input_arr.length; i++) {
    let opponentPlay = input_arr[i][0];
    let myPlay = input_arr[i][2];

    let roundScore = scoreMyPlay(myPlay) + scoreRound(myPlay, opponentPlay);

    totalScore += roundScore;
  }
  console.log(totalScore);
});

const scoreMyPlay = (myPlay) => {
  return myPlay === "X" ? 0 : myPlay === "Y" ? 3 : 6;
};

const scoreRound = (myPlay, opponentPlay) => {
  // lose
  return opponentPlay === "A" && myPlay === "X"
    ? 3
    : opponentPlay === "B" && myPlay === "X"
    ? 1
    : opponentPlay === "C" && myPlay === "X"
    ? 2
    : // draw
    opponentPlay === "A" && myPlay === "Y"
    ? 1
    : opponentPlay === "B" && myPlay === "Y"
    ? 2
    : opponentPlay === "C" && myPlay === "Y"
    ? 3
    : // win
    opponentPlay === "A" && myPlay === "Z"
    ? 2
    : opponentPlay === "B" && myPlay === "Z"
    ? 3
    : 1;
};

// Part One

// myPlay cheat sheet
// X = Rock, 1 point
// Y = Paper, 2 points
// Z = Scissors, 3 points

// opponentPlay cheat sheet
// A = Rock
// B = Paper
// C = Scissors

// const fs = require("fs");

// fs.readFile("02-input.txt", (err, data) => {
//   if (err) throw err;

//   inputStr = data.toString();

//   let input_arr = inputStr.split("\n");

//   let totalScore = 0;

//   for (let i = 0; i < input_arr.length; i++) {
//     let opponentPlay = input_arr[i][0];
//     let myPlay = input_arr[i][2];

//     let roundScore = scoreMyPlay(myPlay) + scoreRound(myPlay, opponentPlay);

//     totalScore += roundScore;
//   }
//   console.log(totalScore);
// });

// const scoreMyPlay = (myPlay) => {
//   return myPlay === "X" ? 1 : myPlay === "Y" ? 2 : 3;
// };

// const scoreRound = (myPlay, opponentPlay) => {
// draw
//   return opponentPlay === "A" && myPlay === "X"
//     ? 3
//     : opponentPlay === "B" && myPlay === "Y"
//     ? 3
//     : opponentPlay === "C" && myPlay === "Z"
//     ? 3
// lose
//     : opponentPlay === "A" && myPlay === "Z"
//     ? 0
//     : opponentPlay === "B" && myPlay === "X"
//     ? 0
//     : opponentPlay === "C" && myPlay === "Y"
//     ? 0
//win
//     : 6;
// };

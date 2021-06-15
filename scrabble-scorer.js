// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
let userWords="";
let vowels=['A', 'E', 'I', 'O', 'U'];


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
       console.log(`Points for '${word[i]}': ${pointValue}`)
			letterPoints += Number(pointValue); 
		 }
 
	  }
	}
  console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   let response=input.question("Let's play some scrabble! Enter a word: ")
    // userWords.push(response);
    // console.log(oldScrabbleScorer(response))
    oldScrabbleScorer(response);
};

function simpleScore(word) {
  let numScore=0;
  for (let i=0; i<word.length; i++) {
    numScore = numScore+1;
  }
  return numScore;
}
console.log(numScore);


function vowelBonusScore (word) {
  let bonusScore=0;
  for (let i=0; i<word.length; i++) {
    if vowels.includes (word[i])  {
      bonusScore=bonusScore+3;
    } else {
      bonusScore=bonusScore+1;
    }
  }
}



let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


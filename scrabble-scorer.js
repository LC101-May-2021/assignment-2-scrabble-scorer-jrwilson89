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
// let userWords="";
let vowels=['A', 'E', 'I', 'O', 'U'];


function oldScrabbleScorer(word) {
	// word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
      //  console.log(`Points for '${word[i]}': ${pointValue}`)
			letterPoints += Number(pointValue); 
		 }
  
	  }
	}
  //console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   let response=input.question("Let's play some scrabble! Enter a word: ")
      response=response.toUpperCase();
    // userWords.push(response);
    // console.log(oldScrabbleScorer(response))
    //oldScrabbleScorer(response);
    //console.log(vowelBonusScore(response));
      return response;
};


function simpleScore(word) {
  let numScore=0;
  for (let i=0; i<scrabbleScore.length; i++) {
    numScore = numScore+1;
  }
  //console.log(`Points for ${word[i]}: ${numScore}`);
  return numScore;
}


function vowelBonusScore (word) {
  let bonusScore=0;
  // word = word.toUpperCase();
  for (let i=0; i<word.length; i++) {
    if (vowels.includes (word[i]))  {
      bonusScore=bonusScore+3;
    } else {
      bonusScore=bonusScore+1;
    }
  }
    return bonusScore;
}

let newPointStructure=transform(oldPointStructure);

let scrabbleScore = function(word) {
  let newScore={};
  //word=word.toLowerCase
  
  for (const letter in word) {
    for (i=0; i<word.length; i++) {
      if (letter[i]===word[i]) {
        // newScore+=newPointStructure[letter];
        newScore=newPointStructure[letter][i];
      }
    }
  }  
  return newScore
}


const oldScrab = {
  name:  'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
}
const simpleSc = {
  name:  'Simple Score',
  description: 'Each letter is worth 1 point',
  scoringFunction: simpleScore
}
const vBonus = {
  name:  'Bonus Vowels',
  description:  'A function that returns a score based on the number of vowels and consonants.',
  scoringFunction:  vowelBonusScore
}
const scoringAlgorithms = [simpleSc, vBonus, oldScrab];

function scorerPrompt() {
  // let select=input.question('Which scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ');
  let select=input.question(`Which scoring algorithm would you like to use? \n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1 or 2: `);
  
  //(`Which scoring algorithm would you like to see? \n ${simpleSc[name] `)
  
  return select;
}


function transform (oldPointStructure) {
  let newPoint={};
  for (let letter in oldPointStructure) {
    let letterArray = oldPointStructure[letter];  
    for (i=0; i<letterArray.length; i++) {
      // newPoint[letterArray]=letter
      // console.log(letterArray[i].toLowerCase() + ": " + letter);
      // newPoint[i]=letterArray[i].toLowerCase()    
    }
  
    // obj[letter]=letter
  }
  // for (i=0; i<obj.length; i++) {
  //   console.log(obj[i]);
  // }
    return newPoint 
}

// let newPointStructure=transform(oldPointStructure);
  


// console.log(newPointStructure);

function runProgram() {
  let response = initialPrompt();
  //let finalWord=newPoint;
        //  let lowCase = 
   let method=scorerPrompt();
    if (method==='0') {
      let simple=simpleScore(response);
      console.log(`Score for ${response}: ${simple}`)
    } else if (method==='1') {
      let vbs=vowelBonusScore(response);
      console.log(`Score for ${response}: ${vbs}`)
    } else if (method==='2') {
      let oldScr=oldScrabbleScorer (response);
      console.log(`Score for ${response}: ${oldScr}`)
    }

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


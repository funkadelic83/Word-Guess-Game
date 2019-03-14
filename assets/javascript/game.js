// 3. Use key events to listen for the letters that your players will type.

// 4. Display the following on the page:


// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

// I'm currently testing the script in index.html for convenience... I will later fix.


// var wordPossibilities = ["dog", "salmon", "greenland", "oceans", "revolution"];
// var wordUp = wordPossibilities[Math.floor(Math.random() * wordPossibilities.length)];
// var charArray = wordUp.split("");



//Display the charArray, but hide the characters as _ until event.key pressed.



// // below this is old scratch code
// var guessesRemaining = 6;
// var alreadyGuessed = 0;
// var wrongGuessed = 0;
// var alreadyGuessedArray = [];
// var userChoice = "";

// var userChoiceElement = document.getElementById("wrong");
// document.onkeyup = function (event) {
//     var userChoice = event.key;
//     if (mysteryWords.includes(userChoice)) {
//         alreadyGuessedArray.push(userChoice);

//     } else {
//         wrongGuessed.push(userChoice);
//         guessesRemaining--;
//     }

//     askQuestions = function () {
//         for (var i = 0; i < questionsAll.length; i++) {
//            // ask the question, confirm OK or Cancel
//                var questionAsk = questionsAll[i];
//                var quiz = confirm(questionAsk.q);
//                if (quiz === questionAsk.a) {
//                    alert("Correct!")
//                } else {alert("Wrong!")};
//                }
               
//            };

// var alreadyGuessedElement = document.getElementById("alreadyGuessed");
